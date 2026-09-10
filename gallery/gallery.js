const galleryItems = [
  ["PCB.jpg", "Printed circuit board prototype"], ["pcb1.jpg", "PCB assembly and bench testing"],
  ["Audio AMP.PNG", "Audio amplifier circuit"],
  ["Bingo.PNG", "Bingo electronics prototype"], ["Bottle fill.PNG", "Automatic bottle filling system"],
  ["Dancing Light.PNG", "Dancing light circuit"],
  ["Heat Shrink Tube Cutter Machine Modification.PNG", "Heat-shrink cutter safety modification"],
  ["Low brightness,Flickering NG sample tester.PNG", "Low-brightness and flicker sample tester"],
  ["Obstacle Avoiding Robot.PNG", "Obstacle-avoiding robot"], ["OK NG Confirmation.PNG", "Production pass-fail confirmation tester"],
  ["pic-1.jpg", "Engineering project prototype 01"], ["pic-2.jpg", "Engineering project prototype 02"],
  ["pic-3.jpg", "Engineering project prototype 03"], ["pic-4.jpg", "Engineering project prototype 04"],
  ["pic-5.jpg", "Electronics bench prototype"], ["pic-6.jpg", "Engineering project prototype 06"],
  ["pic-7.jpg", "Engineering project prototype 07"], ["pic-8.jpg", "Engineering project prototype 08"],
  ["pic-9.jpg", "Engineering project prototype 09"], ["pic-10.jpg", "Engineering project prototype 10"],
  ["pic-11.jpg", "Engineering project prototype 11"], ["pic-12.jpg", "Engineering project prototype 12"],
  ["pic-13.jpg", "Engineering project prototype 13"], ["pic-14.jpg", "Engineering project prototype 14"],
  ["pic-15.jpg", "Engineering project prototype 15"], ["pic-16.jpg", "Engineering project prototype 16"],
  ["pic-17.jpg", "Engineering project prototype 17"], ["pic-18.jpg", "Engineering project prototype 18"],
  ["pic-19.jpg", "Engineering project prototype 19"]
];

const gallery = document.querySelector("#gallery");
for (const [file, caption] of galleryItems) {
  const base = file.replace(/\.[^.]+$/, "");
  const figure = document.createElement("figure");
  figure.className = "gallery-item";
  figure.innerHTML = `<a href="photo/${encodeURI(file)}" target="_blank" rel="noopener noreferrer"><img src="thumbs/${encodeURI(base)}.webp" alt="${caption}" loading="lazy" decoding="async" width="720" height="540"></a><figcaption>${caption}</figcaption>`;
  gallery.append(figure);
}
