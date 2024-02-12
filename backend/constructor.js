// class Storage {
//     constructor(name) {
//       this.database = {};
//     }
  
//     define(name, fields) {
//       return new Model(this.database, name, fields);
//     }
//   }
  
//   // function Model(database, name, fields) {
//     this.database = database;
//     this.name = name;
//     this.fields = {};
//     // Create table
//     database[name] = {};
  
//     const table = database[name];
  
//     // Create fields
//     for (let i = 0; i < fields.length; i++) {
//       const field = fields[i];
//       this.fields[field.name] = field.values;
//       table[field.name] = [];
//     }
//   }
  
//   Model.prototype.addOne = function (name, title) {
//     const options = this.fields[name];
  
//     // datatype
//     if (typeof title != options.type) {
//       throw Errro("not a string");
//     }
  
//     // length
//     if (title >= options.length) {
//       throw Error("Title is longer than " + options.length);
//     }
  
//     if (title == null) {
//       throw Error("Title is null");
//     }
  
//     // save data
//     const id = Math.random();
//     this.database[this.name][name].push({
//       id: id,
//       title
//     });
  
//     return id;
//   };
  
//   Model.prototype.getByPk = function (name, id) {
//     return this.database[this.name][name].find((item) => item.id === id);
//   };
  
//   const myDatabase = new Storage("object");
//   const Post = myDatabase.define("Post", [
//     {
//       name: "title",
//       values: {
//         type: "string",
//         length: 255,
//         default: "notNull"
//       }
//     }
//   ]);
  
//   console.log(Post);
  
//   const postId = Post.addOne("title", "Hello world!");
//   const post = Post.getByPk("title", postId);
//   console.log(post);
  