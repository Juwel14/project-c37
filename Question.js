class Question
{
  constructor()
  {
    this.input = createInput("Enter your name here");
    this.input1 = createInput("Enter correct option no.");
    this.title = createElement('h2');
    
  }

  hide()
  {
    this.input.hide();
    this.input1.hide();
    this.title.hide();
  }

  display()
  {
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input.position(250, 200);
    this.input1.position(450, 200);

    this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
    this.question.position(150, 80);
    this.option1.html("1: Everyone ");
    this.option1.position(150, 100);
    this.option2.html("2: Envelope ");
    this.option2.position(150, 120);
    this.option3.html("1: Estimate ");
    this.option3.position(150, 140);
    this.option4.html("2: Example ");
    this.option4.position(150, 160);

    //this.input1.position(150, 230);
  }
}