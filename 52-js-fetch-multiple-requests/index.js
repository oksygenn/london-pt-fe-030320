const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================
let filter = "";

const getJSON = async (url) => {
  return fetch(url).then((response) => response.json());
};

const main = async () => {
  const allMembers = await getJSON(houseURL);
  const swornMembers = allMembers.swornMembers;
  for (const memberUrl of swornMembers) {
    const member = await getJSON(memberUrl);
    members.push(member);
  }
  renderMembers();
  searchEl.addEventListener("keyup", () => {
    filter = searchEl.value;
    renderMembers();
  });
};

const renderMembers = () => {
  resultEl.innerHTML = "";
  members
    .filter((member) => {
      return member.name.toLowerCase().includes(filter.toLowerCase());
    })
    .forEach((member) => {
      const li = memberLi(member);
      resultEl.appendChild(li);
    });
};

const memberLi = (member) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <p class="name">${member.name}</p>
    <p class="life">${member.born} ${member.died}</p>
    <p class="gender"><strong>Gender: </strong>${member.gender}</p>
    <p class="culture"><strong>Culture: </strong>${member.culture}</p>
  `;
  return li;
};
main();
/**
 *
 * REQUIREMENTS:
 *
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */

/**
 /** 
/**
 * HTML for each member:
  * HTML for each member: 
 * HTML for each member:
 * <li>
 *     <p class="name">Bilbo Baggins</p>
 *     <p class="life">1777 – 1888</p>
 *     <p class="gender"><strong>Gender: </strong>Male</p>
 *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
 * </li>
 */

