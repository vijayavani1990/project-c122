function preload() {
}

function setup() {
    canvas = createCanvas(640, 480,);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 160, 120, 320, 240);
    tint(tint_color);
    rect(70, 37.5, 500, 30,);
    rect(555, 50, 30, 380);
    rect(70, 417.5, 500, 30);
    rect(57.5, 50, 30, 380);
    circle(70, 50, 50);
    circle(320, 50, 50);
    circle(570, 50, 50);
    circle(570, 240, 50);
    circle(570, 430, 50);
    circle(320, 430, 50);
    circle(70, 430, 50);
    circle(70, 240, 50);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}