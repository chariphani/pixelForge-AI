// Image generation is performed server-to-server; no client image upload is required.
export default function uploadMiddleware(req, res, next) {
  next();
}
