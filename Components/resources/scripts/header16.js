export function header16() {
  console.log("Hii Tshirt ni ya white!");

  let close = true;
  let open = true;
  const toggle = () => {
    document.getElementById("nav-content").classList.toggle("sm:max-lg:hidden");
    document.getElementById("nav-content").classList.toggle("sm:max-lg:flex");
    close = false;
  };

  const showDropdown = () => {
    document.getElementById("departments").classList.toggle("hidden");
  };
}
