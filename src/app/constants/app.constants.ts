// Press Ctrl + K + 0 to get better idea of this file , Valid for VSCODE

export const ApplicationName = 'ViewIn Chat';
//export const ApiBaseUrl = "https://localhost:44300"; // Local Twilio Video API URL
//ONLY IN PROD
export const ApiBaseUrl = "https://vinchatapi.azurewebsites.net";
export const UIBaseUrl = "https://vinchatfrontend.azurewebsites.net"; // Local Twilio Video UI URL

interface ApiUrlType {
    // #region Properties (84)


    // Twilio
    readonly CreateRoom: string;
    readonly CompleteARoom: string;
    readonly GetConnectedParticipants: string;
    readonly Participants: string;
    readonly Rooms: string;
    readonly Token: string;
    readonly UpdateSessionChatRoomSID: string;
    readonly GetSessionDetailForVideoCall: string;

    readonly CreateRoomUID: string;
    readonly GetVideoRoomInfo: string;
}

const apiUrls: ApiUrlType = {
    // Twilio
    CreateRoom: `${ApiBaseUrl}/api/video/CreateRoom`,
    GetConnectedParticipants: `${ApiBaseUrl}/api/video/GetConnectedParticipants`,
    CompleteARoom: `${ApiBaseUrl}/api/video/CompleteARoom/`,
    Participants: `${ApiBaseUrl}/api/video/participants`,
    Rooms: `${ApiBaseUrl}/api/video/GetAllRooms`,
    Token: `${ApiBaseUrl}/api/video/token`,
    UpdateSessionChatRoomSID: `${ApiBaseUrl}/api/video/UpdateSessionChatRoomSID`,
    GetSessionDetailForVideoCall: `${ApiBaseUrl}/api/video/GetSessionDetailForVideoCall`,

    CreateRoomUID: `${ApiBaseUrl}/api/video/UpdateRoomUID`,
    GetVideoRoomInfo: `${ApiBaseUrl}/api/video/GetVideoRoomInfo`,

};

export enum FlipAngle { '0deg' = 0, '180deg' = 180 }

export enum SessionStatus { Scheduled = 1, Completed = 2, Cancelled = 3 }

const Dark: OverlayStyleInterface = { OverLayColor: 'black', TextColor: 'white' };

export interface OverlayStyleInterface {
    // #region Properties (2)

    OverLayColor: string;
    TextColor: string;

    // #endregion Properties (2)
}

const Light: OverlayStyleInterface = { OverLayColor: 'white', TextColor: 'black' };

const Transparent: OverlayStyleInterface = { OverLayColor: 'rgba(0, 0, 0, 0.286)', TextColor: 'white' };
export const OverlayStyles = { Dark, Light, Transparent };

export const ApiUrls: ApiUrlType = apiUrls;
