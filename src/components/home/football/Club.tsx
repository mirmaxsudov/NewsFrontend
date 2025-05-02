import "./Football.css";

const Club = () => {
  return (
    <>
      <div
        className={
          "club w-full rounded-[12px] py-[34px] px-[25px] h-[380px] bg-[#fff] flex justify-center items-center"
        }
      >
        <table>
          <thead>
            <tr>
              <th
                className={
                  "w-[150px] text-start text-[#3E3232] text-[16px] font-medium"
                }
              >
                Club
              </th>
              <th
                className={"w-[50px] text-[#3E323280] text-[16px] font-medium"}
              >
                GP
              </th>
              <th
                className={"w-[50px] text-[#3E323280] text-[16px] font-medium"}
              >
                W
              </th>
              <th
                className={"w-[50px] text-[#3E323280] text-[16px] font-medium"}
              >
                D
              </th>
              <th
                className={"w-[50px] text-[#3E323280] text-[16px] font-medium"}
              >
                L
              </th>
              <th
                className={"w-[50px] text-[#3E323280] text-[16px] font-medium"}
              >
                F
              </th>
              <th
                className={"w-[50px] text-[#3E323280] text-[16px] font-medium"}
              >
                A
              </th>
              <th
                className={"w-[50px] text-[#3E323280] text-[16px] font-medium"}
              >
                GD
              </th>
              <th
                className={"w-[50px] text-[#3E323280] text-[16px] font-medium"}
              >
                Pts
              </th>
            </tr>
          </thead>
          <tbody className={"w-[150px]"}>
            <tr>
              <td
                className={
                  "text-[#3E3232] text-[12px] font-medium flex items-center gap-2 me-[20px]"
                }
              >
                1
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
                  alt="Manchester City"
                  className="w-5 h-5"
                />
                Manchester City
              </td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>38</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>29</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>6</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>3</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>99</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>26</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>73</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>93</td>
            </tr>

            <tr>
              <td
                className={
                  "text-[#3E3232] text-[12px] font-medium flex items-center gap-2 me-[20px]"
                }
              >
                2
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
                  alt="Liverpool"
                  className="w-5 h-5"
                />
                Liverpool
              </td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>38</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>28</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>8</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>2</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>94</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>26</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>68</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>92</td>
            </tr>
            <tr>
              <td
                className={
                  "text-[#3E3232] text-[12px] font-medium flex items-center gap-2 me-[20px]"
                }
              >
                3
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
                  alt="Chelsea"
                  className="w-5 h-5"
                />
                Chelsea
              </td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>38</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>21</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>11</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>6</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>76</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>33</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>43</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>74</td>
            </tr>
            <tr>
              <td
                className={
                  "text-[#3E3232] text-[12px] font-medium flex items-center gap-2 me-[20px]"
                }
              >
                4
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg"
                  alt="Tottenham Hotspur"
                  className="w-5 h-5"
                />
                Tottenham Hotspur
              </td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>38</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>22</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>5</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>11</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>69</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>40</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>29</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>71</td>
            </tr>
            <tr>
              <td
                className={
                  "text-[#3E3232] text-[12px] font-medium flex items-center gap-2 me-[20px]"
                }
              >
                5
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
                  alt="Arsenal"
                  className="w-5 h-5"
                />
                Arsenal
              </td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>38</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>21</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>3</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>14</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>61</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>48</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>13</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>69</td>
            </tr>
            <tr>
              <td
                className={
                  "text-[#3E3232] text-[12px] font-medium flex items-center gap-2 me-[20px]"
                }
              >
                6
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
                  alt="Manchester United"
                  className="w-5 h-5"
                />
                Manchester United
              </td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>38</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>16</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>10</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>12</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>57</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>57</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>0</td>
              <td className={"text-[#3E323280] text-[16px] font-medium"}>58</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Club;
