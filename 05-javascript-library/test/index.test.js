const { readBlogFileAsync } = require("../index");

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("readBlogFileAsync::", () => {
  it("shoud be a function", () => {
    expect(typeof readBlogFileAsync).toBe("function");
  });

  it("should return array with results", async () => {
    const result = await readBlogFileAsync("./test/files/blog.md");
    expect(result).toEqual(arrayResult);
  });

  it("should return message that there are no links", async () => {
    const result = await readBlogFileAsync("./test/files/no-links.md");
    expect(result).toEqual("No links");
  });
});
