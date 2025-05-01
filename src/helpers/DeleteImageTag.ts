function removeImgTags(html: string): string {
  return html.replace(/<img\b[^>]*?src=["'][^"']*["'][^>]*>/gi, "");
}

export default removeImgTags;
