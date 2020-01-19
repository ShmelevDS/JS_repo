let utils = {
    playAgain() {
        playAgain = prompt('Хотите сыграть снова? Для повторной игры введите "y"');
        if (playAgain === 'y') {
            game.run();
        }
    },

    printAnswers(q) {
        questionsDB.questions[q].answers.forEach(item => {
            console.log(item);
        });
    }
}