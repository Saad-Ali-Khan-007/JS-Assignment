// Refer to this codepen: https://codepen.io/muhammad-hasham-khalid/pen/abpjeEy

/*
  This codepen basically contains a textarea and some javascript is being used to display the WORD count of the text area and also limit the user to only enter 200 words maximum
*/

// You have to study the codepen given above and implement it for
// - letter count <= 200

(() => {
  let max_length = 100;
  let textarea = document.getElementById("user-text");
  // set attribute max length
  textarea.setAttribute("maxlength", max_length);

  textarea.addEventListener("input", function () {
    let value_length = this.value.length;
    if (value_length > max_length) {
      this.value = this.value.substring(0, max_length);
      value_length = this.value.length;
    }
    document.getElementById("char-length").innerText =
      "Characters remaining " + (max_length - value_length);
  });
})();
