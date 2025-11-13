-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "speechId" INTEGER NOT NULL,
    "scorePathos" INTEGER,
    "scoreLogos" INTEGER,
    "scoreMistakes" INTEGER,
    "scoreContext" INTEGER,
    "scoreRole" INTEGER,
    CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Vote_speechId_fkey" FOREIGN KEY ("speechId") REFERENCES "Speech" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Vote" ("id", "scoreContext", "scoreLogos", "scoreMistakes", "scorePathos", "scoreRole", "speechId", "userId") SELECT "id", "scoreContext", "scoreLogos", "scoreMistakes", "scorePathos", "scoreRole", "speechId", "userId" FROM "Vote";
DROP TABLE "Vote";
ALTER TABLE "new_Vote" RENAME TO "Vote";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
