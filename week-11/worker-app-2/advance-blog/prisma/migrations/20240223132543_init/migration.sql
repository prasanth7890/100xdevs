-- CreateTable
CREATE TABLE "User1" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post1" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Post1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Post1ToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User1_email_key" ON "User1"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_Post1ToTag_AB_unique" ON "_Post1ToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_Post1ToTag_B_index" ON "_Post1ToTag"("B");

-- AddForeignKey
ALTER TABLE "_Post1ToTag" ADD CONSTRAINT "_Post1ToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Post1"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Post1ToTag" ADD CONSTRAINT "_Post1ToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
