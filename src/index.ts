export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    const response = await env.ASSETS.fetch(request);
    const newResponse = new Response(response.body, response);

    newResponse.headers.delete("Content-Encoding");

    if (pathname.match(/\.(js|css)$/)) {
      newResponse.headers.set(
        "Cache-Control",
        "public, max-age=31536000, immutable"
      );
    } else if (pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|ico)$/)) {
      newResponse.headers.set(
        "Cache-Control",
        "public, max-age=31536000, immutable"
      );
    } else if (pathname.match(/\.(woff|woff2|ttf|eot)$/)) {
      newResponse.headers.set(
        "Cache-Control",
        "public, max-age=31536000, immutable"
      );
    } else if (pathname === "/" || pathname.match(/\.html$/)) {
      newResponse.headers.set(
        "Cache-Control",
        "public, max-age=3600, must-revalidate"
      );
    } else {
      newResponse.headers.set("Cache-Control", "public, max-age=86400");
    }

    if (!pathname.match(/\.html$/) && pathname !== "/") {
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      newResponse.headers.set("Expires", expiryDate.toUTCString());
    }

    return newResponse;
  },
};
