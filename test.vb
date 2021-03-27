$hWnd = ~DLLMsg("User32.DLL", "int", "FindWindowA", 0, "天堂2M l 小倫兒")
$con = 0


Def: Beep()
  $beep = 100
  Cmp( $beep < 1200 )
    ~DLLMsg("Kernel32.DLL", "int", "Beep", $beep, 300)
    $beep = $beep + 400
  Loop
End Def
'鍵盤單點擊
Def: KeybdClick($hWnd, $Vk, $Sleep_1, $Sleep_2)
        ~Lib.KeybdMsg($hWnd, 0, $Vk)
        ~Lib.Sleep($Sleep_1)
        ~Lib.KeybdMsg($hWnd, 2, $Vk)
        ~Lib.Sleep($Sleep_2)
End Def

$allenIP = 36.224.94.177
$allenPort = 1234


Cmp(1)

    $Color = ~Lib.ScanPixel($hWnd, 110, 30, ~Lib.RGB(171,45,1), 0.8|0|0)

    Cmp   ($Color == 1)
        ~Dos.Print($con "\x0a")
	    $con++
    ElCmp ($Color == 0)
        ~Dos.Print(HOME "\x0a")     
	    ~KeybdClick($hWnd, 57, 300, 300) 
        ~KeybdClick($hWnd, 57, 300, 300)
        ~KeybdClick($hWnd, 57, 300, 300)
        ~KeybdClick($hWnd, 57, 300, 300)
        ~KeybdClick($hWnd, 57, 300, 300)
        ~Beep()
	~Dos.System("pause")
    End


    $monster = ~Lib.FindImage($hWnd, 53, 541, 287,592, "01", 0.9|0|0)
    
    cmp ($monster == 1)
        ~Beep()
    end
    

    ~Lib.Sleep(1000)  '延遲毫秒

Loop






















Def: Beep()
  $beep = 100
  Cmp( $beep < 1200 )
    ~DLLMsg("Kernel32.DLL", "int", "Beep", $beep, 300)
    $beep = $beep + 400
  Loop
End Def


Cmp(1)
    $a = ~Lib.ServerMsg(1234)
    Cmp(~String.StrCmp($a, "exit"))
        $a = ~Lib.ClientMsg("127.0.0.1", 5678, "哦~ 你要離開了。拜拜!\x0a\x0a")
        Exit
    End
    ~Dos.Print($a "\x0a\x0a")

    $ss = ~String.Instr($a, "home")

    Cmp  ($ss == 1)
        ~Beep()
    loop
Loop












$hWnd = ~DLLMsg("User32.DLL", "int", "FindWindowA", 0, "天堂2M l 小倫兒")

Def: Mouse_Move($dx, $dy)
    $MOUSEEVENTF_MOVE = 0x0001
    $MOUSEEVENTF_ABSOLUTE = 0x8000
    $GetScreenX = ~DLLMsg("User32.DLL", "int", "GetSystemMetrics", 0)
    $GetScreenY = ~DLLMsg("User32.DLL", "int", "GetSystemMetrics", 1)
    ~DLLMsg("User32.DLL", "int", "mouse_event", $MOUSEEVENTF_ABSOLUTE + $MOUSEEVENTF_MOVE, $dx * 65536 / $GetScreenX + 1, $dy * 65536 / $GetScreenY + 1, 0, 0)
End Def

Def: Mouse_Leftone()
    $MOUSEEVENTF_LEFTDOWN = 0x0002
    ~DLLMsg("User32.DLL", "int", "mouse_event", $MOUSEEVENTF_LEFTDOWN, 0, 0, 0, 0)
    ~Lib.Sleep(500)
    $MOUSEEVENTF_LEFTUP = 0x0004
    ~DLLMsg("User32.DLL", "int", "mouse_event", $MOUSEEVENTF_LEFTUP, 0, 0, 0, 0)
End Def