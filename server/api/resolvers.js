const loaders = require('./loaders');

module.exports = ({
  postgresResource: {
    createItem,
    getSharedItems,
    getBorrowedItems
  }
}) => ({
  Query: {
    items: (root, args, context) =>
      context.loaders.allItems.load(args),
    users: (root, args, context) =>
      context.loaders.allUsers.load(args),
    item: (root, { id }, context) =>
      context.loaders.singleItem.load(id),
    user: (root, { id }, context) =>
      context.loaders.singleUser.load(id)
  },
  // Whatever you return in your resolver is what you'll get
  // null means that the variable is pointing to no object
  Mutation: {
    createNewItem(root, { newItem }) {
      return createItem(newItem);
    }
  },
  // For every item
  Item: {
    itemowner({ itemowner }, args, context) {
      return context.loaders.singleUser.load(
        itemowner
      );
    },
    borrower(item) {
      if (item.borrower) {
        return singleUser(item.borrower);
      }
      return null;
    },
    tags({ id }, args, context) {
      return context.loaders.dietTags.load(id);
    }
  },
  User: {
    borroweditems(user) {
      return getBorrowedItems(user.id);
    },
    shareditems(user) {
      return getSharedItems(user.id);
    }
  }
});
