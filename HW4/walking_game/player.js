const player = {
    x: 0,
    y: 0,

    move(nextPoint) {
        if (nextPoint.x >= 0 && nextPoint.y >= 0 && nextPoint.x < config.rowsCount && nextPoint.y < config.columnsCount) {
            this.x = nextPoint.x;
            this.y = nextPoint.y;
        }
    },

}