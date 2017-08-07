import { Injectable } from '@angular/core';


@Injectable()
export class ReportsService {


    getAllBroadcasters() {
        let rows: any = [
            [
                { userId: 1, roomId: 1, reason: " first one " , complainant: 'Bob', time: "21.08 19:41"  },
                { userId: 1, roomId: 2, reason: " second one ", complainant: 'John', time: "21.08 19:42" },
                { userId: 1, roomId: 3, reason: " second one ", complainant: 'John', time: "21.08 19:42" }
            ],
            [
                { userId: 2, roomId: 2, reason: " second one ", complainant: 'John', time: "21.08 19:44" },
                { userId: 2, roomId: 3, reason: " second one ", complainant: 'John', time: "21.08 19:45" , banned: true },
                { userId: 2, roomId: 2, reason: " second one ", complainant: 'John', time: "21.08 12:46" },
                { userId: 2, roomId: 4, reason: " second one ", complainant: 'John', time: "21.08 14:47" },
                { userId: 2, roomId: 2, reason: " second one ", complainant: 'John', time: "21.08 19:48" },
                { userId: 2, roomId: 1, reason: " second one ", complainant: 'John', time: "21.08 17:49" },
                { userId: 2, roomId: 2, reason: " second one ", complainant: 'John', time: "21.08 19:50" }
            ]
        ];
        for (let i = 2; i < 200; i++) {
            rows[i] = [
                { userId: i, roomId: i, reason: 2 * i, complainant: 1.5 * i, time: "21.08 19:40" }
            ];
        };
        return rows;
    }

    getAllChatReports() {
        let rows: any = [
            [
                { userId: "user_id125456", roomId: "room_id12345", message: "first one first one first one first one first one" ,
                 complainant: 'user_id123456', time: "21.08 19:40"  },
                { userId: 1, roomId: 2, message: " second one ", complainant: 'John', time: "21.08 19:40" },
                { userId: 1, roomId: 3, message: " second one ", complainant: 'John', time: "21.08 16:40" }
            ],
            [
                { userId: 2, roomId: 2, message: " second one ", complainant: 'John', time: "21.08 19:40" },
                { userId: 2, roomId: 3, message: " second one ", complainant: 'John', time: "21.08 13:40", banned: true },
                { userId: 2, roomId: 2, message: " second one ", complainant: 'John', time: "21.08 19:40" },
                { userId: 2, roomId: 4, message: " second one ", complainant: 'John', time: "21.08 18:40" },
                { userId: 2, roomId: 2, message: " second one ", complainant: 'John', time: "21.08 19:40" },
                { userId: 2, roomId: 1, message: " second one ", complainant: 'John', time: "21.08 11:40" },
                { userId: 2, roomId: 2, message: " second one ", complainant: 'John', time: "21.08 19:40" }
            ]
        ];
        for (let i = 2; i < 200; i++) {
            rows[i] = [
                { userId: i, roomId: i, message: 2 * i, complainant: 1.5 * i, time: "21.08 19:40" }
            ];
        };
        return rows;
    }

}
