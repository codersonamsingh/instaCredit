// const designations = ["admin", "manager"];
const desAdminSuper = ["super-admin"];
const desAdmin = ["admin"];
const desAdminPlusManager = ["admin", "manager"];

function createCustomerId() {
  const currentDate = new Date();
  const year = String(currentDate.getFullYear()).slice(2);
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hour = String(currentDate.getHours()).padStart(2, "0");
  const randomNum = String(Math.floor(Math.random() * 1000)).padStart(3, "0");
  const customerId = `${day}${month}${year}${hour}${randomNum}`;

  return customerId;
}

module.exports = {
  desAdminSuper,
  desAdmin,
  desAdminPlusManager,
  createCustomerId,
};
