let game = {
    run() {
        let score = 0;
        for (let q = 0; q < config.numberOfQuestions; q++) {
            console.log(questionsDB.questions[q].questionText);
            utils.printAnswers(q)
            result = answerChecker.getAndCheckAnswer(q, score)
            if (result === null) {
                return;
            }
        }
        console.log(`Игра окончена! Вы набрали ${score}/${config.numberOfQuestions} очков!`);
        utils.playAgain()
    },

    init() {
        console.log('Привет, игрок, хочешь стать миллионером?');
        console.log('Да? Тогда введи "game.run()" + Enter и поехали!');
    },
}

game.init();