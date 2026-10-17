# Driving Manual

How to bring the site up locally and exercise it, for a session checking that a change works.

## Running the dev server

Run `npm run dev -- --port <n>` in the background. Without `--port` it takes 3000, or the next free port when 3000 is busy.

- Pick a port of your own when another session may be driving this repo. Check it first with `lsof -nP -iTCP:<n> -sTCP:LISTEN`.
- Wait for the `✓ Built in` line before requesting pages.
- Stop the server when done, and confirm the port is free again.

The dev server builds into `docs/`, the committed destination GitHub Pages serves. Revert a test edit to `source/` and wait for the rebuild, so `docs/` returns to its state before the edit. Check `git status docs` afterwards.

## Capturing screenshots

Use headless Chrome against the running server:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars \
  --user-data-dir=<scratch>/chrome-profile --window-size=1200,1600 --timeout=5000 \
  --screenshot=<scratch>/page.png http://localhost:<n>/
```

Run it in the background and kill it after about 20 seconds. Chrome writes the screenshot but may not exit on its own.

## Failures that aren't bugs

- **Headless Chrome hangs and writes no screenshot.** `--virtual-time-budget` never completes against the dev server, because the page keeps a live-reload connection open. Use `--timeout` instead, as above.
