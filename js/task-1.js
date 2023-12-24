function slugify(title) {
  const slugifyTitle = title.toLowerCase().replaceAll(" ", "-");
  return slugifyTitle;
}