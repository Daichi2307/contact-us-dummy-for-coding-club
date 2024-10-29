function formatText(command) {
  document.execCommand(command, false, null);
}

function insertImage () {
  const imageUrl = prompt("Enter the URL of the image:");
  if (imageUrl) {
      const imgTag = `<img src="${imageUrl}" alt="User Image" style="max-width:100%; height:auto;">`;
      document.execCommand("insertHTML", false, imgTag);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const reason = document.getElementById("reason").value;
  const messageContent = document.getElementById("message").innerHTML;

  if (messageContent.trim() === "") {
      alert("Please enter a message.");
      return false;
  }

  alert(`Thank you, ${name}! Your message has been submitted.`);
  document.getElementById("contactForm"). reset();
  document.getElementById("message").innerHTML = ""; // Clear the editor content
}