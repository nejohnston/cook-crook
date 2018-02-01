const loaders = require("./loaders");

module.exports = () => ({
  Query: {
    items: (root, args, context) => {
      return context.loaders.allItems.load(args);
    },
    users: (root, args, context) => {
      return context.loaders.allUsers.load(args);
    },
    item: (root, { id }, context) => {
      return context.loaders.singleItem.load(id);
    },
    user: (root, { id }, context) => {
      return context.loaders.singleUser.load(id);
    }
  },
  // Whatever you return in your resolver is what you'll get
  // null means that the variable is pointing to no object
  Mutation: {
    addItem(root, { newItem: { title } }) {
      return { title };
    }
  },
  // For every item
  Item: {
    itemowner({ itemowner }, args, context) {
      return context.loaders.singleUser.load(itemowner);
    },
    // borrower(item) {
    //   if (item.borrower) {
    //     return singleUser(item.borrower);
    //   } else {
    //     return null;
    //   }
    // },
    tags({ id }, args, context) {
      return context.loaders.itemTags.load(id);
    }
  },
  User: {
    shareditems(user) {
      return userSharedItems(user.id);
    }
  }
});
