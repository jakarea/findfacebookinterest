import { numberToIntl } from "@/utils/string";
import Image from "next/image";

export interface AdsProps {
  id: string | number;
  audience_size_lower_bound: number;
  audience_size_upper_bound: number;
  description?: string | null;
  name: string | number;
  path: string[];
  topic: string;
}
interface ListTableTypes {
  data: AdsProps[];
  selectedAds: (string | number)[];
  toggleSelect: (id: string | number) => void;
  selectAllAdsToggle: () => void;
}
const ListTable: React.FC<ListTableTypes> = (props) => {
  const { data, toggleSelect, selectedAds, selectAllAdsToggle } = props;
  return (
    <>
      <div className="interest-list-table">
        <table>
          <thead>
            <tr>
              <th>
                <label className="checbox-cont">
                  Name
                  <input
                    type="checkbox"
                    onChange={() => {
                      selectAllAdsToggle();
                    }}
                    checked={selectedAds.length === data.length}
                  />
                  <span className="checkmark"></span>
                </label>
              </th>
              <th>
                <SortingIcon />
                Audience
              </th>
              <th>
                <SortingIcon />
                Topic
              </th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ads: AdsProps) => (
              <tr key={ads.id}>
                <td>
                  <label className="checbox-cont">
                    {ads.name}
                    <input
                      type="checkbox"
                      onChange={() => {
                        toggleSelect(ads.id);
                      }}
                      checked={selectedAds.includes(ads.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </td>
                <td>
                  {numberToIntl(ads.audience_size_lower_bound)} ~{" "}
                  {numberToIntl(ads.audience_size_upper_bound)}
                </td>
                <td>{ads.topic}</td>
                <td>
                  <a href="#">
                    <Image
                      src="./assets/images/fb.svg"
                      alt="Landscape picture"
                      width={25}
                      height={25}
                      className="img-fluid"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="./assets/images/google.svg"
                      alt="Landscape picture"
                      width={25}
                      height={25}
                      className="img-fluid"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="./assets/images/f-icon.svg"
                      alt="Landscape picture"
                      width={25}
                      height={25}
                      className="img-fluid"
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const SortingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g opacity="0.6">
        <path
          d="M2.5 6.25L6.25 2.5M6.25 2.5L10 6.25M6.25 2.5V13.75M17.5 13.75L13.75 17.5M13.75 17.5L10 13.75M13.75 17.5L13.75 6.25"
          stroke="#545D68"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ListTable;
