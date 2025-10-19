"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface RuleSection {
  id: string;
  title: string;
  content: string;
  isCover?: boolean;
}

const ruleSections: RuleSection[] = [
  {
    id: "cover",
    title: "Cover",
    content: "",
    isCover: true,
  },
  {
    id: "field",
    title: "Field",
    content: `**1.1. FIELD** - The playing field shall be 100 yards long, and 53 1/3 yards wide with an endzone of 10 yards long by 53 1/3 yards wide located on either end of the playing field, making the entire playing surface 120 yards long.

**1.2. PYLONS** - Soft, flexible four-sided pylons 4 inches by 4 inches with an overall height of 18 inches, which may include a 2-inch space between the bottom of the pylon and the ground, are required. They shall be red or orange in color. One manufacturer's logo or trademark is permitted on each pylon. They are placed at the inside corners of the eight intersections of the sidelines with the goal lines and end lines. The pylons marking the intersections of the end lines and hash marks extended shall be placed three feet off the end lines. Pylons should also be placed at the 2 intersections of the Sidelines and the 50-yard Line, as well as the four intersections of the Sidelines and 25-yard Lines.

**1.3. LINES** - All lines must be marked with a white material that is not harmful to a person's eyes or skin, and should be four inches wide, except for the Goal Lines, which should be eight inches wide.

**Limit Lines** – a. Limit lines shall be marked with 12-inch lines and at 24-inch intervals 12 feet outside the sidelines and the end lines, except in stadiums where total field surface does not permit. In these stadiums, the limit lines shall not be less than six feet from the sidelines and end lines. Limit lines shall be 4 inches in width and may be yellow. Limit lines designating team areas shall be solid lines. b. No person outside the team area shall be inside the limit lines. Game management personnel have the responsibility and the authority to enforce this rule. (Exception: Hand-held cameras under the supervision of the television partners may briefly be between the limit lines and the sideline after the ball is dead and the game clock has been stopped. c. Limit lines shall also be marked six feet from the team area around the side and back of the team area if the stadium permits.

**Team Area and Coaching Box** – a. On each side of the field, a team area in back of the limit line and between the 20-yard lines shall be marked for the exclusive use of substitutes, athletics trainers and other persons affiliated with the team. The front of the coaching box shall be marked with a solid line six feet outside the sideline between the 20-yard lines. The area between the coaching line and the limit line between the 20-yard lines shall contain white diagonal lines or be marked distinctly for use of coaches. b. The team area shall be limited to squad members in full uniform and a maximum of 20 other individuals directly involved in the game. All persons in the team area are subject to the rules and are governed by decisions of the officials. c. Coaches are permitted in the coaching box which is the area bound by the limit line and coaching line between the 20-yard lines. d. No media personnel, including journalists, radio and television personnel, or their equipment, shall be in the team area or coaching box, and no media personnel shall communicate in any way with people in the team area or coaching box. In stadiums where the team area extends to the spectator seating area, a pass-through area should be made available for media to move from one end of the field to the other on both sides of the field. e. Game management personnel shall remove all persons not authorized by rule. All benches and other rigid features must be 10 yards or further back from the Out of Bounds line. If space permits these features may be placed further back.

**1.4. SIDELINES** - A sideline runs from end line to end line on each side of the field and separates the field of play from the area that is out of bounds. The entire sideline is out of bounds.

**1.5. GOAL LINES** - The goal line at each end of the field of play runs between the sidelines and is part of the vertical plane that separates the end zone from the field of play. The two goal lines are 100 yards apart. The plane of the goal line extends between and includes the pylons, which are out of bounds. The entire goal line is in the end zone. A team's goal line is that which it is defending.

**1.6. END LINES** - An end line runs between the sidelines 10 yards behind each goal line and separates the end zone from the area that is out of bounds. The entire end line is out of bounds.

**1.7. BOUNDARY LINES** - The boundary lines are the sidelines and the end lines. The area enclosed by the boundary lines is "inbounds,'' and the area surrounding and including the boundary lines is "out of bounds.''

**1.8. RESTRAINING LINES** - A restraining line is part of a vertical plane that limits a team's alignment for throw offs. The plane extends beyond the sidelines.

**1.9. YARD LINES** - A yard line is any line in the field of play parallel to the end lines. A team's own yard lines, marked or unmarked, are numbered consecutively from its own goal line to the 50-yard line.

**1.10. HASH MARKS** - The two hash marks are 60 feet from the sidelines. Hash marks and short yard-line extensions shall measure 24 inches in length.

**1.11.** The playing surface shall consist of grass or artificial turf.

**1.12.** The field will be as represented in Figure 1.

**1.13.** All markings or decorations on the field must not hinder the Players in any way.

**1.14.** On a field that is already marked with traditional tackle football markings, there are no additional markings required, simply place the pylons at the 25 & 50-yard lines.`,
  },
  {
    id: "ball",
    title: "Ball",
    content: `**2.1.** All balls will be provided by FLAGBALL.

**2.1.1. The Ball Specifications** - The ball shall meet the following specifications:

a. New or nearly new. (A nearly new ball is a ball that has not been altered and retains the properties and qualities of a new ball.)

b. Cover consisting of four panels of pebble-grained leather without corrugations other than seams.

c. One set of eight equally spaced lacings.

d. Conforms to maximum and minimum dimensions and shape indicated in the accompanying diagram.

e. The ball may not be altered. This includes the use of any ball-drying or ball-warming substance. Mechanical ball-drying and ball-warming devices are not permitted near the sidelines or in the team area.

f. Professional FLAGBALL football league logos are permitted.

g. Advertising is prohibited on the ball [Exceptions: (1) Ball manufacturer's name or logo, (2) institutional logo, (3) FLAGBALL logo.`,
  },
  {
    id: "rosters",
    title: "Rosters & Equipment",
    content: `**3.1.** Each team will have 11 Players on the field.

**3.2.** Every team is allowed to have a maximum of 30 Players active for any game.

**3.3.** Player uniforms must have numbers on the front and back of shirts.

**3.4.** Players must wear team uniforms, with no pockets or stripes on bottoms.

**3.5.** All clothing worn underneath shirts and shorts must match team uniform.

**3.6.** No jewelry is allowed to be worn.

**3.7.** Players can not wear face coverings but are allowed backwards Official FLAGBALL baseball hats and soft protective gear with no visible logos.

**3.8.** Only registered players, coaches, and the Director of Team Operations are allowed on a Team's sideline.

**3.9. FLAG BELT** – to be worn around All players waist. All belts and flags will be inspected and approved by the game officials prior to the start of the contest. All defensive players must wear flag belts, and offensive players who are eligible receivers must, as well.

**3.10. FLAGS** – are to be 14 inches and contrasting colors to the team's uniform pants and properly secured in the Flag Harness.`,
  },
  {
    id: "definitions",
    title: "Definitions",
    content: `**4.1. Ball Ready for Play** – A Dead Ball is Ready for Play when the ball is placed down by an Official at the spot where the ball will next be put in play, and the Referee signals for the 25 second Play Clock to start.

**4.2. Blitz** – On a Blitz, the Defensive team may rush the Quarterback as soon as the ball is Snapped. All Defensive players are eligible to Blitz. There is no limit to the number of Defensive Players that can Blitz on a given play.

**4.3. Block** – On a Block, a player whose team is in possession of the ball can place his open hands on the front of an opposing player between the belly-button and the shoulders.

**4.4. Boundary Lines** – The Boundary Lines are the End Lines and the Sidelines and enclose the field upon which the game is played.

**4.5. Box** – There are 4 Boxes on the Field of Play, two on each side of Midfield. One from the Goal Line to the 25-yard Line, the other from the 25-yard Line to Midfield.

**4.6. Catch** - To CATCH a ball means that a player:

4.6.1. Secures firm control with the hand(s) or arm(s) of a live ball in flight before the ball touches the ground, and;

4.6.2. Touches the ground inbounds with two feet or any part of the body, and then;

4.6.3. Maintains control of the ball long enough to enable that player to perform an act common to the game, i.e., long enough to pitch or hand the ball, advance it, avoid an opponent, etc., and;

4.6.4. Satisfies paragraphs a, b, and c below.

a. If a player goes to the ground in the act of catching a pass (with or without contact by an opponent) the player must maintain complete and continuous control of the ball throughout the process of contacting the ground, whether in the field of play or in the end zone. This is also required for a player attempting to make a catch at the sideline and going to the ground out of bounds. If the player loses control of the ball which then touches the ground before they regain control, it is not a catch. If the player regains control inbounds prior to the ball touching the ground it is a catch.

b. If the player loses control of the ball while simultaneously touching the ground with any part of their body, or if there is doubt that the acts were simultaneous, it is not a catch. If a player has control of the ball, a slight movement of the ball, even if it touches the ground, will not be considered loss of possession; the player must lose control of the ball in order for there to be a loss of possession.

c. If the ball touches the ground after the player secures control and continues to maintain control, and the elements above are satisfied, it is a catch.

**4.7.** An INTERCEPTION is a catch of an opponent's pass or fumble in flight. A catch by any kneeling or prone inbounds player is a completion or interception.

**4.8. Controlled Time** – Controlled Time is the period of the game where Running Time is suspended per the rules.

**4.9. Conversion** – A Conversion is a play that takes place after a Touchdown.

**4.10. Dead Ball** – A Dead Ball is one that is not in play, where the runner is declared down or a pass is declared Incomplete.

**4.11. Defense** – The team that starts the Down without the ball is the Defense.

**4.12. Disqualified Player** – A Disqualified Player is one who is prohibited from further participation in the game.

**4.13. Down** – A Down is a period of action that starts when the ball is Snapped and ends when the ball is declared Dead.

**4.14. End Lines** – The End Lines are the lines at each end of the field and are perpendicular to the Sidelines.

**4.15. End Zone** – The End Zone is the rectangle formed by the Goal Line, the End Line, and the Sidelines.

**4.16. Field of Play** – The Field of Play is the rectangle formed by the Goal Lines and the Sidelines.

**4.17. First Half** – The first 30-minute period of the game.

**4.18. First/Second/Third/Fourth Down** – The initial Down in each Set of Downs is the First Down, the second is Second Down, etc.

**4.19. Force Out** – A Force Out takes place when a Player attempting to catch a ball lands Out of Bounds due primarily to the influence of contact with an opposing Player.

**4.20. Forward Pass** – A Forward Pass is a ball thrown by an Offensive Player that travels to a point that is closer to the Defensive Team's End Zone.

**4.21. Foul** – A Foul is any infraction of a playing rule for which a penalty is prescribed.

**4.22. Free Down** – A Free Down occurs when the Receiving Team is not given an opportunity to catch the ball or is tackled on a return.

**4.23. Free Play** – A Free Play is a play where the team in possession of the ball has the option to replay the Down or accept the outcome of the play.

**4.24. Free Runner** – A Free Runner has possession of the football and would be deemed likely by the Officials to have scored in the absence of a tackle.

**4.25. Fumble or Unintentional Stripped Ball** – Any time a runner loses possession of the ball, he will be considered down at the point where the ball hits the ground.

**4.26. Game Clock** – The Game Clock keeps time for the entire game.

**4.27. Goal Lines** – The Goal Lines are the lines between the Sidelines that separate the End Zone from the Field of Play.

**4.28. Handoff** – A hand to hand transfer of the ball from one player to another.

**4.29. Hash Mark** – A Hash Mark is a mark of 4 inches x 2 feet and are used to measure each yard line.

**4.30. Incomplete Pass** – An Incomplete Pass is a Pass that is not caught.

**4.31. Interception** – A pass caught by the opposing team is an Interception.

**4.32. Kick-off** – The Kick-off will start play at the beginning of each half and after each Conversion attempt.

**4.33. Kicking team** – The Kicking team kicks the Ball to the Receiving team.

**4.34. Lateral** – A Lateral is a sideways or backwards Pass or Pitch from one Offensive Player to another.

**4.35. League** – The League refers to the Commissioner's office of FLAGBALL.

**4.36. Line of Scrimmage** – The Line of Scrimmage is the vertical plane of the yard line that passes through the forward point of the ball.

**4.37. Live Ball** – The Ball is Live when it has been snapped from the Line of Scrimmage.

**4.38. Loss of Down** – Loss of Down is a remedy for a variety of penalties in Flag Football.

**4.39. Man Down** – A team is Man Down when one of their Players has committed an infraction.

**4.40. Midfield** – Midfield is the 50-yard Line.

**4.41. Muff** - A muff is an "uncontrolled touch" of the football by a player on the returning team after it is punted/thrown-off.

**4.42. Neutral Zone** - The neutral zone is the space between the two scrimmage lines extended to the sidelines.

**4.43. Offense** – The team that starts the Down in possession of the ball is the Offense.

**4.44. Offside** – After the ball is ready for play, offside occurs when a defensive player is in or beyond the neutral zone when the ball is legally snapped.

**4.45. Opposing Territory** – The area of the field between Midfield and the End Zone toward which a team's Offense drives.

**4.46. Out of Bounds** – A Player is Out of Bounds when he touches a Boundary Line.

**4.47. Out of Bounds Spot** – Wherever an Offensive Player with the ball exits the Field of Play will be the spot of the next Down.

**4.48. Overtime** – Overtime is the third period of the game that is played only if the score is tied at the end of the Second Half.

**4.49. Own Territory** – The area of the field between Midfield and the End Zone away from which a team's Offense drives.

**4.50. Pass** – A Pass is an act by a Player of directing the ball to a teammate in the air.

**4.51. Play Clock** – Once the Officials put the ball in play, the Offensive team will have 25 seconds to snap the ball.

**4.52. Possession** – A Possession is defined as a period where the Offense is awarded the opportunity to complete at least one Set of Downs.

**4.53. Punt Play** – A play in which the Offense elects to kick the ball downfield.

**4.54. Quarterback** – The Quarterback is the Offensive Player who first touches the ball after the Center's Snap.

**4.55. Receiving Team** – The Receiving Team position themselves on their own side of Midfield until the Kicking team initiates the Kick-off.

**4.56. Running Time** – Running Time is the period of the game where the clock stops only on Time Outs.

**4.57. Second Half** – The second 30-minute period of the Game.

**4.58. Set of Downs** – See Rule 10.

**4.59. Sidelines** – The Sidelines are the lines on each side of the field and are perpendicular to the End Lines.

**4.60. Simultaneous Possession** – Simultaneous Possession occurs when a Forward Pass is caught by Offensive and Defensive Players at exactly the same time.

**4.61. Snap** – The Snap is the act of removing the ball from the ground and delivering it to another Player.

**4.62. Touchdown** – A Touchdown is a scoring play. The scoring team receives 6 points for a Touchdown where the Down started in Opposing Territory and 7 points when the play started in their Own Territory.`,
  },
  {
    id: "time",
    title: "Time",
    content: `**5.1. Game Duration:** Unless tournament rules dictate otherwise, each game will be 60 minutes in duration, consisting of 4, 15-minute Quarters. There will be no change of field between quarters.

**5.2. Running Time:** The game will be played under Running Time. The Game Clock will stop only for Team, Injury and Referee Time Outs.

**5.3. Controlled Time:** The last 2 minutes of the Second Half will be played under Controlled time.

**5.4. Starting and Stopping the Clock:**

**5.4.1.** During Running Time the Game Clock will stop after any scoring play or penalty that occurs with 1-minute or less remaining in the first half.

**5.4.2.** The clock will restart on the subsequent release of the Kick-off or Snap of the next Play.

**5.4.3. 1- and 2-min Warning:** The Game Clock will not stop for a 1-minute warning in the First Half but will stop for a 2-minute warning in the Second Half.

**5.4.4.** During Controlled Time the Game Clock will stop if any of six conditions are met:
a) A Player in possession of the ball steps out of bounds
b) An attempted Pass is Incomplete
c) Change of possession
d) Scoring play
e) Conversion play
f) Penalty
g) A Team or Referee Time Out

**5.4.5. Penalty** - If a Penalty is declined during Controlled Time, the Game Clock will restart on the Ready for Play whistle.

**5.4.6.** During Running Time the Game Clock will stop at the beginning of all Referee Time Outs.

**5.5. Time Out Length:** Referee - 1 or 5 minutes; Change of possession - 1 minute; Between halves - 5 minutes; Team - 1 minute; Between Regulation and Overtime - 1 minute.

**5.6. Injury Time Outs** will last a minimum of 1 minute and will be called by the Referee.

**5.6.1. Injury During Running Time,** an injured player must leave the Field of Play or their team forfeits one of their Time Outs.

**5.6.2. Injury During Controlled Time,** the injured player's team will automatically forfeit a Time Out.

**5.7. Team Time Outs:** Each team will get 3 Time Outs per half. Time Outs not called in the First Half will not carry over to the Second Half.

**5.8. The Play Clock:** Will start when the Referee sounds the Ready for Play whistle and the Offense will have 30 seconds to start a new play.

**5.9. 10-Second Run off:** During controlled time, any penalty committed that stops the clock will be subject to a 10-second run off, at the option of the non-offending team.`,
  },
  {
    id: "overtime",
    title: "Overtime",
    content: `**6.1.** If the score of the game is tied after 4 Quarters, Overtime will be played. During Overtime, Team Time Outs are not allowed.

**6.2. Possession:** The team that won the initial longest throw contest will get to choose to take the ball or play defense.

**6.3. End of Field:** Both Teams will defend the End Zone that was the target of the Game's initial Kick-off.

**6.4. Blitz:** In Overtime, each team will receive 1 Blitz per Overtime period.

**Conclusion:** The team leading at the conclusion of Overtime wins the game. If the score is tied at the end of the first Overtime period, an additional Overtime period will be played.`,
  },
  {
    id: "scoring",
    title: "Scoring",
    content: `**7.1. How:** After the player retains possession of the ball, the front of the ball must cross the Goal Line in order to score a Touchdown.

**7.2. Possession in the endzone:** Prior to possession, a Player landing in the End Zone must place both feet or another body part completely inside the field of play.

**7.3. Touchdown:** will earn 6 points if scored from 50 yards or less; 7 points from beyond 50 yards.

**7.3.1. Defensive TD:** Interceptions may be returned for a score.

**7.4. Safety:** Will earn 2 points for the Defense if they pull an Offensive Player's flag in his own End Zone.

**7.5. Conversion:** After a Touchdown is scored, the ball will be spotted at the middle of the field and scoring team will have the opportunity to earn extra points via a Conversion.

**7.5.1. Point values** – Kicked Conversions attempted from the: 10-yard Line - 1 point; 5-yard Line (from scrimmage)- 1 point; 10-yard Line - 2 points; 20-yard Line - 3 points.

**7.5.2.** If the Defense intercepts the ball and returns it to the Opposing End Zone, they will be awarded 2 points.

**7.5.3.** Any Blitz by the Defense during a conversion will count as one of its five blitzes for the Half.

**7.5.4.** A safety on a conversion – the appropriate team will be awarded 1 point.`,
  },
  {
    id: "pre-game",
    title: "Pre-Game",
    content: `**8.1.** Prior to the start time of the game, each team will send representatives to the 50-yard Line for a coin toss. The team that wins the coin toss can choose if they would like to start the game by receiving or executing a Kick-off.

**8.2.** The team will also designate a (1) sideline coach who may call time-outs during the game.`,
  },
  {
    id: "kick-off",
    title: "The Kick-off",
    content: `**9.1.** Prior to the Kick-off, the Receiving team can line up in any formation so long as none of their players are across Midfield before the ball is thrown.

**9.2.** A player from the Kicking team will initiate a Kick-off by kicking the ball from his team's 35-yard Line.

**9.3.** The Receiving Team, either by catching the ball in the air or picking it up off of the ground, may advance any Kick-off.

**9.4.** If the ball is caught by the Receiving Team and the Receiving Player elects to place a knee on the ground in the Receiving Team's End Zone, the Receiving Team will start with a First Down at its own 25-yard Line.

**9.5.** If the Kick-off initially hits the ground before the Receiving Team's Goal Line, the ball may either be picked up and returned by the Receiving Team or downed by the Kicking team.

**9.6.** Once downed by the Kicking team, the result is a Dead Ball with the ball spotted where it was first touched.

**9.7.** If the Receiving Team muffs the ball on a fly or bounce, the ball will be spotted where it first made contact with the Receiving Team.

**9.8.** If the Receiving Team, drops the ball in the End Zone, the result of the play will be a Touchback.

**9.9. Onside Play:** In lieu of a Kick-off, the Kicking team has the option to elect an optional play, called an Onside Play.

**9.10. After a Safety:** If a team surrenders a Safety, the teams switch sides of the field.`,
  },
  {
    id: "set-of-downs",
    title: "Set of Downs",
    content: `**10.1.** The Offense will have one Set of Downs to advance the ball from one Box to the next. Once the Offense advances the ball from one Box into the next, they will receive a new Set of Downs.

**10.2.** After the kick-off the Offense must cross their own 40-yard Line to receive a new Set of Downs, unless the return passes their 40-yard Line.

**10.3. Spotting the Ball:** On plays that end in between the Hash Marks, the ball will be spotted where the play ends. If a play ends outside the Hash Marks, the ball will be spotted in-line with the nearest Hash Mark.`,
  },
  {
    id: "game-play",
    title: "Game Play & Formations",
    content: `**11.1 Formations**

**11.1.1. Number of players:** Each team will consist of a roster of 30 active Players, with 11 Players on the field during any play.

**11.1.2. On the Line:** The Offense must have a minimum of 3 Eligible Receivers on the line of scrimmage, who must line up at least 3 feet apart from each other and the center.

**11.1.3. Near the Center:** The offense is allowed, a maximum of 3 players to line up either side of the Center at the Line of Scrimmage or within one-yard in the backfield.

**11.1.4. Player in the Backfield:** An offensive back must clearly be 2 or more yards off the line of scrimmage to be legal.

**11.1.5. Defense:** There is no required formation for the Defense.

**11.2 Offensive Play**

**11.2.1.** Offensive plays are initiated by a snap from the Center.

**11.2.2. Motion:** The Offense is allowed to have 1 Player in motion at any time.

**11.3 Eligible Receivers**

**11.3.1.** If a lineman wishes to be eligible to receive a forward pass, he must wear flags and report as eligible to the Head Referee.

**11.3.2.** The Quarterback cannot catch a Forward Pass unless it is completed beyond the Line of Scrimmage.

**11.4 Laterals**

**11.4.1.** On Scrimmage Plays one Lateral per team per possesion per play is allowed.

**11.4.2.** On Kick-offs and Punt Returns two Laterals are allowed during the Receiving Team's return only.

**11.4.3.** After the snap, the first handoff behind the line of scrimmage from the QB to another player will not be considered a lateral.

**11.4.4.** Forward passes are permitted after Handoffs and Laterals as long as the ball and the passer have not completely crossed the Line of Scrimmage.

**11.4.5.** Laterals can be intercepted and returned.`,
  },
  {
    id: "punts",
    title: "Punts",
    content: `**12.1** Teams are only allowed to Punt on Fourth Down if they are in their Own Territory and have not passed Midfield.

**12.2** The team that is Punting must announce their intentions to the Referee before the Ready for Play whistle.

**12.3** In some versions of youth play, organizers may elect to throw Punts.`,
  },
  {
    id: "possessions",
    title: "Possessions",
    content: `**13.1.** A catch or interception is ruled complete as soon as a Player has control of the ball and two feet touch completely inbounds.

**13.2.** If a Player loses possession of the ball, when the ball hits the ground, the runner is considered to have had their flag pulled and the play is dead.

**13.3. Simultaneous Possession** of a Forward Pass will be ruled to be a catch for the Offense regardless of the order of whose feet touch the ground first.`,
  },
  {
    id: "misc-rules",
    title: "Miscellaneous Rules",
    content: `**14.1. Sideline Personnel** - Coaches are allowed anywhere on the sideline between the 25-yard Lines.

**14.2. Players who fall to the ground** - may get up and continue to run.

**14.3. Loss of Down penalties** - imposed on the Offense on Fourth Down result in change of possession.

**14.4. Offsetting Fouls** - If penalties are called on both Teams during any play, the result is a replay of the Down.

**14.5. Free Down** - Any penalty committed by the Defense which would normally result in an automatic First Down will result in a Free Down awarded to the Offense.

**14.6. Foul during a Free Down** - If by the offense, it will follow the remedies where the next down would be 1.

**14.7. After an inadvertent whistle** - the Offense has the option of replaying the down or keeping the progress made on the play.

**14.8. Forward progress** - is measured by the position of the front of the ball when either flag is pulled.

**14.9. Defensive Contact** - Defensive Players can initiate contact with open hands from the waist to the shoulders of an Offensive Player within 5 yards of the Line of Scrimmage.

**14.10. Defensive Penalty** - Games cannot end on a Defensive penalty.

**14.11. Tournament Play** - Number of Quarters, game length, number of blitzes may be modified based on tournament specifications.`,
  },
  {
    id: "penalties",
    title: "Penalties & Remedies",
    content: `**15.1. CHARGING:** Charging takes place when an Offensive Player running with the ball makes significant physical contact with a Defensive Player who had established a stationary position.

**15.2. DEFENSIVE HOLDING:** Defensive Holding occurs when a Defensive Player holds onto a part of the body or uniform of a ball carrier. The remedy is an automatic First Down at the spot of the Foul.

**15.3. INTENTIONAL DEFENSIVE HOLDING:** Occurs when a Defensive Player holds onto a part of the body or uniform of a Free Runner.

**15.4. DEFENSIVE PASS INTERFERENCE (DPI):** DPI occurs when bodily contact initiated by a Defensive Player prevents an Offensive Player from attempting to catch a likely catchable Pass.

**15.5. DELAY OF GAME:** Delay of Game occurs if the Offense does not start a new play before the Play Clock expires. The remedy is Loss of Down.

**15.6. KICK-OFF/PUNT OUT OF BOUNDS:** If the Kicking team throws the ball Out of Bounds untouched, the receiving team will be awarded the ball at their 45-yard line.

**15.7. DIVING:** Defensive players may dive to pull flags, but the offense may not dive for the purpose of establishing forward progress.

**15.8. EARLY PULL:** If a Defensive Player removes an Offensive Player's flag before that Player possesses the ball, the Referee should say "Early Pull" and play continues.

**15.9. ENCROACHMENT:** If the Defense crosses the Line of Scrimmage prior to the snap of the ball, the remedy is a gain of 5 yards for the Offense.

**15.10. FALSE START:** If any member of the Offensive Team crosses the Line of Scrimmage before the ball is snapped, the Offense is penalized 5 yards.

**15.11. FLAG DELAY:** The Defender who pulls a flag is required to immediately drop the flag on the ground.

**15.12. FLAG-GUARDING:** The remedy for Flag-Guarding is a spot foul and Loss of the NEXT Down.

**15.13. FLAG TAMPERING:** Any attempt to tamper with Flags will result in automatic game Disqualification.

**15.14. ILLEGAL BLOCKING:** The remedy is Loss of Down.

**15.15. ILLEGAL CONTACT BY THE OFFENSE:** The remedy is Loss of Down at the previous spot.

**15.16. ILLEGAL LATERAL:** A Lateral that either goes forward or is the second Lateral on a scrimmage play ends that play.

**15.17. ILLEGAL FORWARD PASS:** Any forward pass thrown where the entire body of the passer has been beyond the line of scrimmage. The remedy is a loss of down.

**15.18. ILLEGAL MOTION:** The remedy for Illegal Motion is Loss of Down.

**15.19. INELIGIBLE RECEIVER DOWNFIELD:** No Offensive player may run Out of Bounds without the ball and then touch the ball on the current play.

**15.20. INTERFERENCE WITH A KICK-OFF OR PUNT RETURN:** Kicking teams must give the Receiving Player a half-yard buffer zone to catch any Kick-off or Punt.

**15.21. INTENTIONAL GROUNDING:** Intentional Grounding occurs when a Quarterback's forward pass is not thrown in the vicinity of a receiver. The remedy will be Loss of Down.

**15.22. MISSING FLAG:** A Missing Flag violation occurs when a Player begins a play without either of their two flags attached.

**15.23. OFFSIDE:** Kicking teams crossing the Line of Scrimmage before a Kick-off or Punt.

**15.24. ROLLING:** An Offensive Player who Rolls on the ground for the purpose of preventing his flag from being pulled will be deemed to be down.

**15.25. ROUGHING THE KICKER:** If a Defensive Player runs into the Punter causing more than incidental contact, the Offense gets a new set of Downs.

**15.26. ROUGHING THE PASSER:** Roughing the Passer occurs when a Defensive Player makes contact with the throwing arm, shoulder or upper torso of any Offensive Player attempting a forward pass.

**15.27. TACKLING:** Tackling is defined as the intentional act of a Defensive Player disrupting an Offensive Player's progress through physical contact.

**15.28. TACKLING A FREE RUNNER:** A Free Runner has possession of the football with no defenders in front of him and would be deemed likely by the Officials to have scored.

**15.29. TOO MANY PLAYERS:** If the Offense starts a play with more than 11 Players on the field, the play is dead and the Offense loses the Down.

**15.30. UNSPORTSMANLIKE CONDUCT:** Includes disrespecting officials, taunting, fighting, illegal contact above the shoulders, or intentionally blitzing when all blitzes have been used.

**15.31. UN-TUCKED BALL CARRIER/UNALIGNED FLAGS:** Prior to a Snap, whenever the Referee observes any Player with his shirt covering any part of his flags, the Referee will warn the player.`,
  },
  {
    id: "referees",
    title: "Referees & Staff",
    content: `**16.1.** All Officials will be trained and credentialed by the League.

**16.2.** Up to six Officials will work each game: one Referee, two Linesmen and two Field Judges, and a Timekeeper.

**16.3.** The Referee is the senior most Official and can overrule any of the other Officials.

**16.4.** The Linesmen will stand outside the Sidelines on either side of the field near the Line of Scrimmage.

**16.5.** The Field Judges will be stationed on the Defensive side of the Line of Scrimmage.

**16.6.** The Timekeeper will be responsible for operating the Game, Play and Go Clocks.

**16.7.** All Officials will wear uniforms provided by the League. Black and white striped shirts, black hat, black pants, and black shoes.

**16.8.** One additional staff member will be responsible for keeping track of where the ball is spotted.

**16.9.** Instant replay review of disputed calls is permitted if available.

**16.10.** All plays are reviewable including penalties.`,
  },
  {
    id: "referee-signals",
    title: "Referee Signals",
    content: `**BASIC SIGNALS:**

**DELAY OF GAME or FLAG DELAY** - Folded arms.

**FALSE START** - Forearms rotated over each other.

**BLOCKING** - One arm extended in front of chest, hand open, grasped at wrist by other hand.

**CHARGING** - Two arms extended in front of chest, closed fists with thumbs on top.

**DIVING** - Arms extended tilted slightly towards ground, palms facing downward.

**ENCROACHMENT or OFFSIDE** - Hands on hips.

**FLAG-GUARDING** - One arm raised, palm open, motioned down towards hip.

**ILLEGAL CONTACT OFFENSE** - One open hand extended forward.

**ILLEGAL FORWARD PASS** - One hand place behind the back.

**ILLEGAL HANDOFF** - One arm out to the side, open hand, thumb pointing upwards.

**ILLEGAL LATERAL** - Both arms extended towards ground on one side of body.

**ILLEGAL MOTION** - One hand brought to top of chest, hand open, palm facing down.

**INTENTIONAL GROUNDING** - Parallel arms waived diagonally across body.

**MISSING FLAG** - Arms out to sides, elbows connected to body, shrugging shoulders.

**MOVING PICK or DEFENSIVE HOLDING** - One clenched fist in front of the chest, grabbed by the other hand.

**PASS INTERFERENCE** - Both arms extended in front of shoulders, hands open.

**ROLLING** - One arm extended with one finger pointed at the ground, circular motion with finger.

**RUN CLOCK** - Full circle made with one arm.

**TACKLING** - Hugging motion simulated with both arms in front of body.

**TIME OUT** - Forearms crossed above the head, palms facing forward.

**TOO MANY PLAYERS** - Both hands on top of head.

**UN-TUCKED BALL CARRIER** - Pull on shirt near belt with one hand.

**UNSPORTSMANLIKE CONDUCT** - Arms outstretched, palms down.`,
  },
];

export default function RulesModule() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTOCOpen, setIsTOCOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const tocContainerRef = useRef<HTMLDivElement>(null);
  const tocButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const goToNextPage = () => {
    if (currentPage < ruleSections.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Scroll to top when page changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [currentPage]);

  // Auto-scroll TOC to show active section only when necessary
  useEffect(() => {
    const activeButton = tocButtonRefs.current[currentPage];
    const container = tocContainerRef.current;

    if (activeButton && container) {
      // Get the position of the button relative to the scrollable container
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const buttonOffsetTop = activeButton.offsetTop;
      const buttonHeight = activeButton.offsetHeight;

      const buffer = 40;

      // Calculate if button is outside the visible scroll area
      const isAboveView = buttonOffsetTop < containerScrollTop;
      const isBelowView =
        buttonOffsetTop + buttonHeight >
        containerScrollTop + containerHeight - buffer;

      // Only scroll if the button is actually outside the visible area
      if (isAboveView || isBelowView) {
        // Use 'nearest' to scroll minimum amount needed
        activeButton.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [currentPage]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        goToNextPage();
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        goToPreviousPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  const formatContent = (content: string) => {
    // Split by double line breaks for paragraphs
    return content.split("\n\n").map((paragraph, idx) => {
      // Check if it's a bold header (numbered section like "**1.1. FIELD**")
      if (paragraph.startsWith("**") && paragraph.includes("**")) {
        const parts = paragraph.split("**");
        // Check if it's a three-level subsection (like 11.1.1)
        const isThreeLevelSubsection =
          parts[1] && /^\d+\.\d+\.\d+\./.test(parts[1]);
        // Check if it's a two-level header (like 11.1)
        const isTwoLevelHeader = parts[1] && /^\d+\.\d+\.\s/.test(parts[1]);
        // Check if it's a main numbered header (like 1.1. FIELD)
        const isNumberedHeader = parts[1] && /^\d+\.\d+\./.test(parts[1]);

        let className = "mb-6 mt-0"; // Default for unnumbered bold sections

        if (isThreeLevelSubsection) {
          className = "mb-4 mt-0"; // Subsections no indent
        } else if (isTwoLevelHeader || isNumberedHeader) {
          className = "mb-6 mt-0 first:mt-0"; // Two-level headers not indented
        }

        return (
          <div key={idx} className={className}>
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i}>{part}</strong>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </div>
        );
      }

      // Check if it starts with a letter (like a), b), c))
      const startsWithLetter = paragraph.match(/^[a-z]\)/);
      // Check if it's an unnumbered paragraph (doesn't start with a number)
      const isUnnumbered = !paragraph.match(/^(\d+\.\d+\.|\d+\.\d+\.\d+)/);

      return (
        <p
          key={idx}
          className={
            startsWithLetter ? "mb-4 ml-6" : isUnnumbered ? "mb-4 ml-6" : "mb-4"
          }
        >
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="flex flex-col h-full w-full bg-white min-[500px]:rounded-lg shadow-2xl overflow-hidden relative outline-none min-[500px]:mt-5 min-[1000px]:flex-row">
      {/* Backdrop when TOC is open - Mobile only (<500px) */}
      {isTOCOpen && (
        <div
          className="absolute inset-0 bg-black/50 z-10 max-[499px]:block min-[500px]:hidden"
          onClick={() => setIsTOCOpen(false)}
        />
      )}

      {/* Mobile TOC (<500px): Absolute positioned dropdown */}
      <div
        className={`absolute w-full bg-gray-50 border-gray-200 transition-all duration-300 z-20 flex flex-col max-[499px]:flex min-[500px]:hidden ${
          isTOCOpen ? "shadow-xl" : "max-h-14 overflow-hidden"
        }`}
        style={{
          maxHeight: isTOCOpen ? "calc(100% - 4rem)" : undefined,
        }}
      >
        <button
          onClick={() => setIsTOCOpen(!isTOCOpen)}
          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors outline-none focus:outline-none"
        >
          <h2 className="text-lg font-medium text-gray-600 truncate pr-2">
            {ruleSections[currentPage].isCover
              ? "Table of Contents"
              : `${currentPage}. ${ruleSections[currentPage].title}`}
          </h2>
          <svg
            className={`w-5 h-5 text-gray-600 transform transition-transform flex-shrink-0 ${
              isTOCOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className={`flex flex-col flex-1 overflow-hidden ${
            isTOCOpen ? "" : "hidden"
          }`}
        >
          <nav className="flex-1 overflow-hidden px-2 pb-3">
            <div
              className="overflow-y-auto h-full space-y-1 scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {ruleSections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setCurrentPage(index);
                    setIsTOCOpen(false);
                  }}
                  className={`w-full text-left py-3 rounded-lg transition-colors text-xs outline-none focus:outline-none ${
                    currentPage === index
                      ? "bg-flagball-red text-white font-medium pl-4 pr-3"
                      : "text-gray-700 pl-4 pr-3"
                  }`}
                >
                  {section.isCover ? (
                    "Official Rules"
                  ) : (
                    <>
                      {index}. {section.title}
                    </>
                  )}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop/Tablet TOC (500-999px): Top dropdown, extends to bottom nav bar */}
      <div
        className={`w-full bg-gray-50 border-b border-gray-200 flex flex-col max-[499px]:hidden min-[500px]:max-[999px]:flex min-[1000px]:hidden flex-shrink-0 ${
          isTOCOpen ? "max-h-[calc(100%-56px)]" : ""
        }`}
      >
        <button
          onClick={() => setIsTOCOpen(!isTOCOpen)}
          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors outline-none focus:outline-none flex-shrink-0"
        >
          <h2 className="text-lg font-medium text-gray-600 truncate pr-2">
            {ruleSections[currentPage].isCover
              ? "Table of Contents"
              : `${currentPage}. ${ruleSections[currentPage].title}`}
          </h2>
          <svg
            className={`w-5 h-5 text-gray-600 transform transition-transform flex-shrink-0 ${
              isTOCOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isTOCOpen && (
          <div
            className="overflow-hidden"
            style={{ maxHeight: "calc(100% - 56px)" }}
          >
            <nav className="h-full overflow-hidden px-4 pb-8">
              <div
                className="overflow-y-auto h-full space-y-1 scrollbar-hide"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {ruleSections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setCurrentPage(index);
                      setIsTOCOpen(false);
                    }}
                    className={`w-full text-left py-3 rounded-lg transition-colors text-base outline-none focus:outline-none ${
                      currentPage === index
                        ? "bg-flagball-red text-white font-medium pl-4 pr-3"
                        : "text-gray-700 pl-4 pr-3"
                    }`}
                  >
                    {section.isCover ? (
                      "Official Rules"
                    ) : (
                      <>
                        {index}. {section.title}
                      </>
                    )}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Large Desktop TOC (>=1000px): Left sidebar */}
      <div className="max-[999px]:hidden min-[1000px]:flex w-[300px] h-full bg-gray-50 border-r border-gray-200 flex-col">
        <div className="bg-gray-50 px-4 pt-8 pb-3 flex-shrink-0">
          <h2 className="text-xl text-gray-600">Table of Contents</h2>
        </div>

        <nav className="flex-1 overflow-hidden px-4 pb-8">
          <div
            ref={tocContainerRef}
            className="overflow-y-auto h-full space-y-1 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {ruleSections.map((section, index) => (
              <button
                key={section.id}
                ref={(el) => {
                  tocButtonRefs.current[index] = el;
                }}
                onClick={() => {
                  setCurrentPage(index);
                }}
                className={`w-full text-left py-3 rounded-lg transition-colors text-base outline-none focus:outline-none ${
                  currentPage === index
                    ? "bg-flagball-red text-white font-medium pl-4 pr-3"
                    : "text-gray-700 pl-4 pr-3"
                }`}
              >
                {section.isCover ? (
                  "Official Rules"
                ) : (
                  <>
                    {index}. {section.title}
                  </>
                )}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Content - Right Side */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Content Area */}
        {ruleSections[currentPage].isCover ? (
          /* Cover Page */
          <div
            ref={contentRef}
            className="flex-1 overflow-y-auto px-4 pb-16 min-[500px]:px-8 min-[500px]:pb-20 pt-20 min-[500px]:pt-6 min-[1000px]:pt-4"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6 min-[500px]:space-y-8">
              <div className="relative">
                <Image
                  src="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/logo_black_v2.png"
                  alt="FLAGBALL"
                  width={300}
                  height={75}
                  className="w-auto h-12 min-[500px]:h-16"
                />
                <span className="absolute -top-1 min-[500px]:-top-2 -right-6 min-[500px]:-right-8 text-xs min-[500px]:text-sm font-bold text-gray-900">
                  TM
                </span>
              </div>
              <h1 className="text-2xl min-[500px]:text-4xl font-bold text-gray-900">
                Official Rules
              </h1>
              <h2 className="text-2xl min-[500px]:text-4xl font-bold text-gray-900">
                2025
              </h2>
            </div>
          </div>
        ) : (
          /* Rules Content Pages */
          <>
            {/* Section Header - Only show on Large Desktop (>=1000px) */}
            <div className="hidden min-[1000px]:block bg-white px-8 pt-8 pb-3 flex-shrink-0">
              <h1 className="text-xl font-bold pb-3 text-flagball-red border-b-2 border-gray-300">
                {ruleSections[currentPage].title}
              </h1>
            </div>

            {/* Rules Content */}
            <div
              ref={contentRef}
              className="flex-1 overflow-y-auto px-4 pb-16 min-[500px]:px-8 min-[500px]:pb-20 pt-20 min-[500px]:pt-6 min-[1000px]:pt-4"
            >
              <div className="text-gray-700 leading-relaxed text-sm min-[500px]:text-lg">
                {formatContent(ruleSections[currentPage].content)}
              </div>
            </div>
          </>
        )}

        {/* Navigation Arrows */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2 min-[500px]:p-3 border-t border-gray-200 bg-gray-50">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            className="flex items-center justify-center w-9 h-9 min-[500px]:w-10 min-[500px]:h-10 rounded-full bg-flagball-red text-white hover:opacity-80 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
            aria-label="Previous page"
          >
            <svg
              className="w-4 h-4 min-[500px]:w-5 min-[500px]:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <span className="text-gray-600 font-medium text-sm min-[500px]:text-base">
            {currentPage === 0
              ? ""
              : `${currentPage} of ${ruleSections.length - 1}`}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === ruleSections.length - 1}
            className="flex items-center justify-center w-9 h-9 min-[500px]:w-10 min-[500px]:h-10 rounded-full bg-flagball-red text-white hover:opacity-80 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
            aria-label="Next page"
          >
            <svg
              className="w-4 h-4 min-[500px]:w-5 min-[500px]:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
