var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* play.ts
   Selina Daley
   March 4 2016
   Scene where the main game is played
*/
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
            this._one = 0;
            this._two = 0;
            this._three = 0;
            this._four = 0;
            this._five = 0;
            this._six = 0;
        }
        // Start Method
        Play.prototype.start = function () {
            // add Roll Button to the scene
            this._rollButton = new objects.Button("RollButton", 290, 382, false);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);
            this._diceLabel = new Array();
            this._diceLabel[0] = new objects.Label("1", "20px Consolas", "#000000", 200, 300);
            this.addChild(this._diceLabel[0]);
            this._diceLabel[1] = new objects.Label("1", "20px Consolas", "#000000", 400, 300);
            this.addChild(this._diceLabel[1]);
            // Initialize Array of Bitmaps 
            this._initializeBitmapArray();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        Play.prototype._initializeBitmapArray = function () {
            this._dice = new Array();
            for (var diceNum = 0; diceNum < 2; diceNum++) {
                this._dice[diceNum] = new createjs.Bitmap(assets.getResult("Dice1"));
                this._dice[diceNum].x = 116 + (diceNum * 204);
                this._dice[diceNum].y = 100;
                this.addChild(this._dice[diceNum]);
                console.log("Dice Number " + diceNum + " " + this._dice[diceNum]);
            }
        };
        Play.prototype._rollTheDice = function () {
            var betLine = [" ", " "];
            var outCome = [0, 0];
            for (var roll = 0; roll < 2; roll++) {
                outCome[roll] = Math.floor((Math.random() * 6) + 1);
                this._diceLabel[roll].text = "" + outCome[roll];
                switch (outCome[roll]) {
                    case (1):
                        betLine[roll] = "Dice1";
                        this._one++;
                        break;
                    case (2):
                        betLine[roll] = "Dice2";
                        this._two++;
                        break;
                    case (3):
                        betLine[roll] = "Dice3";
                        this._three++;
                        break;
                    case (4):
                        betLine[roll] = "Dice4";
                        this._four++;
                        break;
                    case (5):
                        betLine[roll] = "Dice5";
                        this._five++;
                        break;
                    case (6):
                        betLine[roll] = "Dice6";
                        this._six++;
                        break;
                }
            }
            return betLine;
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._rollButtonClick = function (event) {
            var bitmap = this._rollTheDice();
            for (var diceNum = 0; diceNum < 2; diceNum++) {
                this._dice[diceNum].image = assets.getResult(bitmap[diceNum]);
            }
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
