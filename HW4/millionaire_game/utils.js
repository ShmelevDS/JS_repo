let utils = {
    playAgain() {
        play_again = prompt('Хотите сыграть снова? Для повторной игры введите "y"');
        if (play_again === 'y') {
            game.run();
        }
    },

    printAnswers(q) {
        questionsDB.questions[q].answers.forEach(item => {
            console.log(item);
        });
    }
}