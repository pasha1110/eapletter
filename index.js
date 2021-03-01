/*
  eapletter by Angga, created February 2021, credit by Angga, ISC license 
  version: 1.0.5 (ready)
  inspired by Linux's figlet and other modules, it is recommended to use chalk
  
  
  copyright @ eapletter 2021
  copyright is protected by license
  
  DO NOT COPY PASTE IS ILLEGAL 
*/

//the print function is to shorten process.stdout.write because it is too long
function print(str) {
  process.stdout.write(str);
}

//All initial letters are here, the text will be capitalized before printing
let A = "..######..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n";
let B = "..######..\n..#....#..\n..#####...\n..#....#..\n..######..\n\n";
let C = "..######..\n..#.......\n..#......\n..#.......\n..######..\n\n";
let D = "..#####...\n..#....#..\n..#....#..\n..#....#..\n..#####...\n\n";
let E = "..######..\n..#.......\n..######..\n..#.......\n..######..\n\n";
let F = "..######..\n..#.......\n..######..\n..#.......\n..#.......\n\n";
let G = "..######..\n..#.......\n..#.####..\n..#....#..\n..######..\n\n";
let H = "..#....#..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n";
let I = "..######..\n....##....\n....##....\n....##....\n..######..\n\n";
let J = "..######..\n....##....\n....##....\n..#.##....\n..####....\n\n";
let K = "..#...#...\n..#..#....\n..##......\n..#..#....\n..#...#...\n\n";
let L = "..#.......\n..#.......\n..#.......\n..#.......\n..######..\n\n";
let M = "..#....#..\n..##..##..\n..#.##.#..\n..#....#..\n..#....#..\n\n";
let N = "..#....#..\n..##...#..\n..#.#..#..\n..#..#.#..\n..#...##..\n\n";
let O = "..######..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n";
let P = "..######..\n..#....#..\n..######..\n..#.......\n..#.......\n\n";
let Q = "..######..\n..#....#..\n..#.#..#..\n..#..#.#..\n..######..\n\n";
let R = "..######..\n..#....#..\n..#.##...\n..#...#...\n..#....#..\n\n";
let S = "..######..\n..#.......\n..######..\n.......#..\n..######..\n\n";
let T = "..######..\n....##....\n....##....\n....##....\n....##....\n\n";
let U = "..#....#..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n";
let V = "..#....#..\n..#....#..\n..#....#..\n...#..#...\n....##....\n\n";
let W = "..#....#..\n..#....#..\n..#.##.#..\n..##..##..\n..#....#..\n\n";
let X = "..#....#..\n...#..#...\n....##....\n...#..#...\n..#....#..\n\n";
let Y = "..#....#..\n...#..#...\n....##....\n....##....\n....##....\n\n";
let Z = "..######..\n......#...\n.....#....\n....#.....\n..######..\n\n";
let ifNull = "..........\n..........\n..........\n..........\n\n";
let ifDot = "----#----\n\n";

//main function, has 3 parameters, 1 mandatory 2 optional
function letter({ text = "", type = "#", use_dot = true }) {
  //if the character is entered incorrectly will issue an error
  let error = `the type of character ${type} is not allowed`;
  if (type === ".") {
    //displays an error, if one occurs
    console.log(error);
    process.exit;
  } //if true
  else {
    //get the length of text
    for (let x = 0; x < text.length; x++) {
      let c = text[x];

      //make all text capitalized
      c = c.toUpperCase();
      A = A.replace(/[#]/g, type);
      B = B.replace(/[#]/g, type);

      C = C.replace(/[#]/g, type);
      D = D.replace(/[#]/g, type);
      E = E.replace(/[#]/g, type);
      F = F.replace(/[#]/g, type);
      G = G.replace(/[#]/g, type);
      H = H.replace(/[#]/g, type);
      I = I.replace(/[#]/g, type);
      J = J.replace(/[#]/g, type);
      K = K.replace(/[#]/g, type);
      L = L.replace(/[#]/g, type);
      M = M.replace(/[#]/g, type);
      N = N.replace(/[#]/g, type);
      O = O.replace(/[#]/g, type);
      P = P.replace(/[#]/g, type);
      Q = Q.replace(/[#]/g, type);
      R = R.replace(/[#]/g, type);
      S = S.replace(/[#]/g, type);
      T = T.replace(/[#]/g, type);
      U = U.replace(/[#]/g, type);
      V = V.replace(/[#]/g, type);
      W = W.replace(/[#]/g, type);
      X = X.replace(/[#]/g, type);
      Y = Y.replace(/[#]/g, type);
      Z = Z.replace(/[#]/g, type);
    }
  }

  // if the user wants to use a dot
  if (use_dot) {
    for (x = 0; x < text.length; x++) {
      c = text[x];
      c = c.toUpperCase();

      if (c == "A") {
        //print("..######..\n..#....#..\n..######..")
        //print("\n..#....#..\n..#....#..\n\n")
        print(A);
      } else if (c == "B") {
        print(B);
      } else if (c == "C") {
        print(C);
      } else if (c == "D") {
        print(D);
      } else if (c == "E") {
        print(E);
      } else if (c == "F") {
        print(F);
      } else if (c == "G") {
        print(G);
      } else if (c == "H") {
        print(H);
      } else if (c == "I") {
        print(I);
      } else if (c == "J") {
        print(J);
      } else if (c == "K") {
        print(K);
      } else if (c == "L") {
        print(L);
      } else if (c == "M") {
        print(M);
      } else if (c == "N") {
        print(N);
      } else if (c == "O") {
        print(O);
      } else if (c == "P") {
        print(P);
      } else if (c == "Q") {
        print(Q);
      } else if (c == "R") {
        print(R);
      } else if (c == "S") {
        print(S);
      } else if (c == "T") {
        print(T);
      } else if (c == "U") {
        print(U);
      } else if (c == "V") {
        print(V);
      } else if (c == "W") {
        print(W);
      } else if (c == "X") {
        print(X);
      } else if (c == "Y") {
        print(Y);
      } else if (c == "Z") {
        print(Z);
      } else if (c == " ") {
        print(ifNull);
      } else if (c == ".") {
        print(ifDot);
      }
    }
  } // if the user doesn't want to use dots
  else {
    for (let x = 0; x < text.length; x++) {
      let c = text[x];
      c = c.toUpperCase();
      A = A.replace(/[.]/g, " ");
      B = B.replace(/[.]/g, " ");

      C = C.replace(/[.]/g, " ");
      D = D.replace(/[.]/g, " ");
      E = E.replace(/[.]/g, " ");
      F = F.replace(/[.]/g, " ");
      G = G.replace(/[.]/g, " ");
      H = H.replace(/[.]/g, " ");
      I = I.replace(/[.]/g, " ");
      J = J.replace(/[.]/g, " ");
      K = K.replace(/[.]/g, " ");
      L = L.replace(/[.]/g, " ");
      M = M.replace(/[.]/g, " ");
      N = N.replace(/[.]/g, " ");
      O = O.replace(/[.]/g, " ");
      P = P.replace(/[.]/g, " ");
      Q = Q.replace(/[.]/g, " ");
      R = R.replace(/[.]/g, " ");
      S = S.replace(/[.]/g, " ");
      T = T.replace(/[.]/g, " ");
      U = U.replace(/[.]/g, " ");
      V = V.replace(/[.]/g, " ");
      W = W.replace(/[.]/g, " ");
      X = X.replace(/[.]/g, " ");
      Y = Y.replace(/[.]/g, " ");
      Z = Z.replace(/[.]/g, " ");

      if (c == "A") {
        //print("..######..\n..#....#..\n..######..")
        //print("\n..#....#..\n..#....#..\n\n")
        print(A);
      } else if (c == "B") {
        print(B);
      } else if (c == "C") {
        print(C);
      } else if (c == "D") {
        print(D);
      } else if (c == "E") {
        print(E);
      } else if (c == "F") {
        print(F);
      } else if (c == "G") {
        print(G);
      } else if (c == "H") {
        print(H);
      } else if (c == "I") {
        print(I);
      } else if (c == "J") {
        print(J);
      } else if (c == "K") {
        print(K);
      } else if (c == "L") {
        print(L);
      } else if (c == "M") {
        print(M);
      } else if (c == "N") {
        print(N);
      } else if (c == "O") {
        print(O);
      } else if (c == "P") {
        print(P);
      } else if (c == "Q") {
        print(Q);
      } else if (c == "R") {
        print(R);
      } else if (c == "S") {
        print(S);
      } else if (c == "T") {
        print(T);
      } else if (c == "U") {
        print(U);
      } else if (c == "V") {
        print(V);
      } else if (c == "W") {
        print(W);
      } else if (c == "X") {
        print(X);
      } else if (c == "Y") {
        print(Y);
      } else if (c == "Z") {
        print(Z);
      } else if (c == " ") {
        print(" \n\n\n");
      } else if (c == ".") {
        print(ifDot);
      }
    }
  }
}

export default letter;
/*
  example: 
    
  new letter ({
    text: "Hello World",
    type: "@", default is: #
    use_dot: true, default is true
  })
  
*/
