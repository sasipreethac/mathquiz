
function addUser() {
    p1 = document.getElementById("a").value;
    p2 = document.getElementById("b").value;
  
      localStorage.setItem("player1", p1);
      localStorage.setItem("player2", p2);
  
      window.location = "index1.html";
  }
  
  