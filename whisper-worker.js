// Optional local Whisper transcription helper.
// The Homework Helper loads this worker when a local Transformers.js/Whisper build is available.
// Kept separate so the main app remains a single HTML file.
self.onmessage = async (event) => {
  self.postMessage({
    type: "error",
    message: "Local Whisper model files are not bundled yet. Add a browser-compatible Whisper model to enable offline transcription."
  });
};
