(function() {
    $(".nodisplay").click(function() {
        // console.log($(this).find("li"));
        $(".fixed").html($(this).clone());
        $(".fixed").addClass("active");
    })
})();