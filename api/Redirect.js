export default function handler(req, res) {
  // Replace with the URL you want to redirect to
  const targetUrl = "http://interpals08.firebaseio.com";

  res.redirect(302, targetUrl);
}
