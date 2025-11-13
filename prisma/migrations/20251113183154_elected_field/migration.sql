-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Speech" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stage" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "elected" BOOLEAN NOT NULL DEFAULT false,
    "debateId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Speech_debateId_fkey" FOREIGN KEY ("debateId") REFERENCES "Debate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Speech_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Speech" ("content", "debateId", "id", "stage", "userId") SELECT "content", "debateId", "id", "stage", "userId" FROM "Speech";
DROP TABLE "Speech";
ALTER TABLE "new_Speech" RENAME TO "Speech";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
