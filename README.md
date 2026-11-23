# Homework Helper

A browser-based study helper that runs without an API key or backend.

## Run
Open `index.html` in Chrome or publish the repository with GitHub Pages.

## Current capabilities
- Ask general homework questions using the built-in local knowledge and response logic.
- Choose a school subject.
- Attach supported text and note files.
- Attach audio files and request speech transcription with Transformers.js and Whisper running in the browser.

## Important limitations
- The first audio transcription needs internet access to download the Transformers.js library and Whisper model. Browser caching may help on later visits, but this is not a guaranteed offline model installation.
- PDF text extraction and image OCR are not implemented in this version.
- This is a study helper, not a substitute for checking answers against class materials.
- No API key is required and uploaded file processing happens in the browser.
