# Bitwig Controller Script with CC Feedback

For MIDI controllers that can respond to feedback (e.g. TouchOSC,
Faderfox UC4, etc), send the CC value back so that the controller
stays in sync with its mapped target. This ensures that the controller
state will reflect the current state of a device when a parameter is
changed manually or when a preset is loaded.

## Installation

Copy CCFeedback.control.js to your platform's controller script directory:

- macOS: ```Documents/Bitwig Studio/Controller Scripts```

- Windows: ```%USERPROFILE%\Documents\Bitwig Studio\Controller Scripts```

- Linux: ```~/Bitwig Studio/Controller Scripts```

## Acknowledgements

Special thanks to Evan Bogunia's [excellent series of tutorials](https://www.keithmcmillen.com/blog/controller-scripting-in-bitwig-studio-part-1/).
