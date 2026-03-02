let warriors = [
  { id: "W001", name: "Musashi", class: "Samurai", attack: 85, defense: 60 },
  { id: "W002", name: "Ragnar", class: "Viking", attack: 92, defense: 70 },
  {
    id: "W003",
    name: "Spartacus",
    class: "Gladiator",
    attack: 80,
    defense: 65,
  },
  { id: "W004", name: "Lancelot", class: "Knight", attack: 75, defense: 85 },
  { id: "W005", name: "Leonidas", class: "Spartan", attack: 88, defense: 72 },
];

const validClasses = [
  "Samurai",
  "Viking",
  "Gladiator",
  "Ninja",
  "Knight",
  "Spartan",
];

function addWarrior() {
  let id = prompt("Nhập ID:");
  if (warriors.find((w) => w.id === id)) {
    console.log("Lỗi: ID đã tồn tại!");
    return;
  }

  let name = prompt("Nhập tên:");
  if (warriors.find((w) => w.name.toLowerCase() === name.toLowerCase())) {
    console.log("Tên chiến binh đã có.");
    return;
  }

  let charClass = prompt("Nhập class (" + validClasses.join(", ") + "):");
  if (validClasses.includes(charClass) === false) {
    console.log("Lỗi: Class không hợp lệ!");
    return;
  }

  let atk = +prompt("Nhập attack (1-100):");
  if (atk < 1 || atk > 100) {
    console.log("Attack không hợp lệ!");
    return;
  }

  let def = +prompt("Nhập defense (>= 0):");
  if (isNaN(def) || def < 0) {
    console.log("Defense không hợp lệ!");
    return;
  }

  warriors.push({
    id: id,
    name: name,
    class: charClass,
    attack: atk,
    defense: def,
  });
  console.log("Đã thêm: " + name);
}

function deleteWarrior() {
  let name = prompt("Nhập tên muốn xóa:");
  let index = warriors.findIndex(
    (w) => w.name.toLowerCase() === name.toLowerCase(),
  );

  if (index === -1) {
    console.log("Không tìm thấy chiến binh!");
  } else {
    let xacNhan = prompt("Xác nhận xóa " + name + "? (yes/no)");
    if (xacNhan.toLowerCase() === "yes") {
      warriors.splice(index, 1);
      console.log("Đã xóa xong!");
    } else {
      console.log("Đã hủy thao tác.");
    }
  }
}

function updateWarrior() {
  let name = prompt("Nhập tên cần sửa:");
  let warrior = warriors.find(
    (w) => w.name.toLowerCase() === name.toLowerCase(),
  );

  if (warrior) {
    let atk = +prompt("Attack mới (1-100):");
    let def = +prompt("Defense mới (>=0):");
    if (atk >= 1 && atk <= 100 && def >= 0) {
      warrior.attack = atk;
      warrior.defense = def;
      console.log("Đã cập nhật chiến binh: " + warrior.name);
    } else {
      console.log("Thông số lỗi!");
    }
  } else {
    console.log("Không tìm thấy chiến binh!");
  }
}

function searchWarrior() {
  let type = prompt("1. Tìm theo tên | 2. Tìm theo class");
  let key = prompt("Nhập từ khóa cần tìm:");

  if (type === "1") {
    let res = warriors.find((w) => w.name.toLowerCase() === key.toLowerCase());
    if (res) {
      console.log(
        "Tìm thấy: " +
          res.name +
          ", Class: " +
          res.class +
          ", Công: " +
          res.attack +
          ", Thủ: " +
          res.defense,
      );
    } else {
      console.log("Không tìm thấy chiến binh nào tên " + key);
    }
  } else {
    let list = warriors.filter(
      (w) => w.class.toLowerCase() === key.toLowerCase(),
    );
    if (list.length > 0) {
      console.table(list);
    } else {
      console.log("Không tìm thấy chiến binh nào thuộc class " + key);
    }
  }
}

function showTotalPower() {
  let atk = warriors.reduce((sum, w) => sum + w.attack, 0);
  let def = warriors.reduce((sum, w) => sum + w.defense, 0);
  console.log("Tổng sức mạnh Guild -> Attack: " + atk + " | Defense: " + def);
}

function sortWarriors() {
  let type = prompt("1. Tăng dần theo attack | 2. Giảm dần theo attack");
  if (type === "1") {
    warriors.sort((a, b) => a.attack - b.attack);
  } else {
    warriors.sort((a, b) => b.attack - a.attack);
  }
  console.log("Đã sắp xếp xong!");
}

let choice;
do {
  choice = +prompt(
    "--- ANCIENT WARRIORS GUILD ---\n" +
      "1. Hiển thị danh sách\n" +
      "2. Thêm chiến binh mới\n" +
      "3. Xóa chiến binh\n" +
      "4. Cập nhật thông tin\n" +
      "5. Tìm kiếm chiến binh\n" +
      "6. Tính tổng sức mạnh\n" +
      "7. Sắp xếp theo attack\n" +
      "0. Thoát chương trình\n" +
      "Nhập lựa chọn của bạn (0-7):",
  );

  switch (choice) {
    case 1:
      console.table(warriors);
      break;
    case 2:
      addWarrior();
      break;
    case 3:
      deleteWarrior();
      break;
    case 4:
      updateWarrior();
      break;
    case 5:
      searchWarrior();
      break;
    case 6:
      showTotalPower();
      break;
    case 7:
      sortWarriors();
      break;
    case 0:
      alert("Tam biệt!Hẹn gặp lại");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
      break;
  }
} while (choice !== 0);
