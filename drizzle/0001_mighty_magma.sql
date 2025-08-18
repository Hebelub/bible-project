CREATE TABLE `bible-project_location` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(256) NOT NULL,
	`startYear` integer,
	`endYear` integer,
	`generalInfo` text,
	`biblicalReferences` text,
	`importantEvents` text,
	`coordinates` text(100),
	`emoji` text(10),
	`locationType` text(50),
	`createdAt` integer DEFAULT (unixepoch()) NOT NULL,
	`updatedAt` integer
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `bible-project_location` (`name`);--> statement-breakpoint
CREATE INDEX `type_idx` ON `bible-project_location` (`locationType`);