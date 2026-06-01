const menuItems = [
  {
    name: "Tandoori Paneer Burger",
    price: 220,
    category: "mains",
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80",
    description: "Charred paneer steak, mint mayo, pickled onions, and toasted brioche.",
  },
  {
    name: "Fire-Roasted Garden Pizza",
    price: 340,
    category: "mains",
    badge: "Wood Fired",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80",
    description: "Thin crust, mozzarella, roasted peppers, basil, and chilli oil.",
  },
  {
    name: "Chilli Garlic Noodles",
    price: 260,
    category: "mains",
    badge: "Spicy",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
    description: "Wok-tossed noodles with crisp vegetables and garlic soy glaze.",
  },
  {
    name: "Mushroom Alfredo Pasta",
    price: 290,
    category: "mains",
    badge: "Comfort",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    description: "Penne in parmesan cream with mushrooms and cracked pepper.",
  },
  {
    name: "Peri-Peri Fries",
    price: 140,
    category: "small",
    badge: "Crispy",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80",
    description: "Double-fried potato fries with peri-peri salt and herb dip.",
  },
  {
    name: "Spinach Citrus Salad",
    price: 180,
    category: "fresh",
    badge: "Fresh",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    description: "Baby spinach, citrus, nuts, cucumber, and mustard vinaigrette.",
  },
  {
    name: "Dahi Kebab Bites",
    price: 210,
    category: "small",
    badge: "Chef Pick",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    description: "Hung-curd kebabs with coriander chutney and pomegranate.",
  },
  {
    name: "Masala Corn Ribs",
    price: 190,
    category: "small",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80",
    description: "Crisp corn ribs, lime, chilli butter, and smoked paprika.",
  },
  {
    name: "Quinoa Chaat Bowl",
    price: 240,
    category: "fresh",
    badge: "Light",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    description: "Quinoa, chickpeas, cucumber, chutneys, sev, and herb yogurt.",
  },
  {
    name: "Saffron Kulfi Sundae",
    price: 170,
    category: "desserts",
    badge: "Sweet",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    description: "Kulfi, rose syrup, pistachio crumble, and cardamom cream.",
  },
  {
    name: "Chocolate Chai Mousse",
    price: 190,
    category: "desserts",
    badge: "Rich",
    image:
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=900&q=80",
    description: "Dark chocolate mousse with chai spice and cocoa nibs.",
  },
  {
    name: "Kokum Cooler",
    price: 120,
    category: "drinks",
    badge: "House Drink",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
    description: "Kokum, lime, black salt, mint, and sparkling water.",
  },
  {
    name: "Mango Lassi Cloud",
    price: 150,
    category: "drinks",
    badge: "Seasonal",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=80",
    description: "Alphonso mango, yogurt, saffron, and toasted almond dust.",
  },
];

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const menuList = document.querySelector("[data-menu-list]");
const filterButtons = document.querySelectorAll("[data-filter]");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const reservationForm = document.querySelector("[data-reservation-form]");
const formMessage = document.querySelector("[data-form-message]");
const dateInput = document.querySelector("#date");

const today = new Date();
dateInput.min = today.toISOString().slice(0, 10);

function renderMenu(filter = "all") {
  const filteredItems =
    filter === "all" ? menuItems : menuItems.filter((item) => item.category === filter);

  menuList.innerHTML = filteredItems
    .map(
      (item) => `
        <article class="menu-card">
          <div class="menu-card-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <span>${item.badge}</span>
          </div>
          <div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
          <footer>
            <span class="price">${currencyFormatter.format(item.price)}</span>
            <span class="tag">${item.category}</span>
          </footer>
        </article>
      `,
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((currentButton) => currentButton.classList.remove("is-active"));
    button.classList.add("is-active");
    renderMenu(button.dataset.filter);
  });
});

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.classList.remove("is-success");

  const formData = new FormData(reservationForm);
  const reservationDate = new Date(`${formData.get("date")}T00:00:00`);
  const day = reservationDate.getDay();

  reservationForm
    .querySelectorAll("[aria-invalid]")
    .forEach((field) => field.removeAttribute("aria-invalid"));

  if (!reservationForm.checkValidity()) {
    const invalidField = reservationForm.querySelector(":invalid");
    invalidField?.setAttribute("aria-invalid", "true");
    invalidField?.focus();
    formMessage.textContent = "Please complete the highlighted field.";
    return;
  }

  if (day === 1) {
    dateInput.setAttribute("aria-invalid", "true");
    dateInput.focus();
    formMessage.textContent = "Reservations are closed on Mondays.";
    return;
  }

  const guests = Number(formData.get("guests"));
  const name = formData.get("name");
  const time = formData.get("time");

  formMessage.classList.add("is-success");
  formMessage.textContent = `Thanks ${name}. Your table for ${guests} at ${time} is ready to be confirmed by phone.`;
  reservationForm.reset();
  dateInput.min = today.toISOString().slice(0, 10);
});

renderMenu();
