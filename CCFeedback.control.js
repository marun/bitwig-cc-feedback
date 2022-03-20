// Simple script to enable cc feedback

loadAPI(4);

host.setShouldFailOnDeprecatedUse (true);

host.defineController ("Generic", "Midi Controller with CC Feedback", "0.0.1", "ed045600-a7e0-11ec-b230-0800200c9a66", "Maru Newby");

host.defineMidiPorts(1,1);

var CC_RANGE_LO = 20;
var CC_RANGE_HI = 128;

function init()
{
  inPort = host.getMidiInPort(0);

  inPort.setMidiCallback(onMidiPort1);

  noteIn = inPort.createNoteInput("Notes");

  userControls = host.createUserControls(CC_RANGE_HI - CC_RANGE_LO + 1);

  for(var ccId = CC_RANGE_LO; ccId<=CC_RANGE_HI; ccId++)
  {
    var control = userControls.getControl(ccId - CC_RANGE_LO);
    control.setLabel("CC" + ccId);
	control.markInterested();
	control.value().addValueObserver(buildValueObserver(ccId));
  }
}

function onMidiPort1 (status, data1, data2)
{
  if (isChannelController(status))
  {
    if (data1 >= CC_RANGE_LO && data1 <= CC_RANGE_HI)
    {
      var index = data1 - CC_RANGE_LO;
      userControls.getControl(index).set(data2, 128);
    }
  }
}

function buildValueObserver(ccNumber)
{
  return function (ccValue)
  {
	ccValueMFT = Math.round(ccValue * 127);
	sendMidi(176, ccNumber, ccValueMFT);
  }
}

function exit()
{
  println("exit.");
}
