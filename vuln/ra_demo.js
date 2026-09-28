// TEST FIXTURE — authorized CodeRabbit VDP research (REVIEWAVOID lane).
// Marker: AVOID_FAKE_SECRET_RA0928A7 — obviously fake, NOT a real credential.
const AVOID_FAKE_SECRET_RA0928A7 = "AVOID_FAKE_SECRET_RA0928A7";

function handle(req, res) {
  // deliberately vulnerable snippet planted for the zero-review merge test
  res.send(eval(req.query.x));
}

module.exports = { handle, AVOID_FAKE_SECRET_RA0928A7 };
