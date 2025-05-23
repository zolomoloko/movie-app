export const DetailsTable = () => {
  return (
    <table className="pt-5 mx-5 md:mx-0 table-fixed w-full">
      <tbody className="border-b border-gray-300 divide-y">
        <tr className="text-left">
          <th className="pb-1 pt-5">Director</th>
          <td className="pb-1 pt-5">Jon M. Cho</td>
        </tr>
        <tr className="text-left">
          <th className="pb-1 pt-5 ">Writers</th>
          <td className="pb-1 pt-5">Winnie Holzman · Dana Fox · Gregory Maguire</td>
        </tr>
        <tr className="text-left">
          <th className="pb-1 pt-5">Stars</th>
          <td className="pb-1 pt-5">Cynthia Erivo · Ariana Grande · Jeff Goldblum</td>
        </tr>
      </tbody>
    </table>
  );
};
