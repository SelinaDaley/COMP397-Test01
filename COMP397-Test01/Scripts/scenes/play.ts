/* play.ts
   Selina Daley
   March 4 2016
   Scene where the main game is played
*/
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _diceLabel: objects.Label[];
        private _dice: createjs.Bitmap[];
        private _rollButton: objects.Button;

        private _one = 0;
        private _two = 0;
        private _three = 0;
        private _four = 0;
        private _five = 0;
        private _six = 0;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // Start Method
        public start(): void {

            // add Roll Button to the scene
            this._rollButton = new objects.Button("RollButton", 290, 382, false);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);

            this._diceLabel = new Array<objects.Label>();
            this._diceLabel[0] = new objects.Label("1", "20px Consolas", "#000000", 200, 300);
            this.addChild(this._diceLabel[0]);
            this._diceLabel[1] = new objects.Label("1", "20px Consolas", "#000000", 400, 300);
            this.addChild(this._diceLabel[1]);            

            // Initialize Array of Bitmaps 
            this._initializeBitmapArray();

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }


        private _initializeBitmapArray(): void {
            this._dice = new Array<createjs.Bitmap>();
            for (var diceNum: number = 0; diceNum < 2; diceNum++) {
                this._dice[diceNum] = new createjs.Bitmap(assets.getResult("Dice1"));
                this._dice[diceNum].x = 116 + (diceNum * 204);
                this._dice[diceNum].y = 100;
                this.addChild(this._dice[diceNum]);
                console.log("Dice Number " + diceNum + " " + this._dice[diceNum]);
            }
        }

        private _rollTheDice(): string[] {
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
        }



        //EVENT HANDLERS ++++++++++++++++++++
        private _rollButtonClick(event: createjs.MouseEvent): void {

            var bitmap: string[] = this._rollTheDice();

            for (var diceNum: number = 0; diceNum < 2; diceNum++)
            {
                this._dice[diceNum].image = assets.getResult(bitmap[diceNum]);
            }

        }
    }
}