import {
  CalendarToday,
  FitnessCenter,
  Wifi,
  LocalCafeOutlined,
  CurrencyRupeeOutlined,
  LivingOutlined,
  RestoreOutlined,
  SportsTennisOutlined,
} from "@mui/icons-material";
import { Feature } from "../../types";

export const features: Array<Feature> = [
  {
    id: 1,
    feature: "Community Events",
    icon: CalendarToday,
  },
  {
    id: 2,
    feature: "Gym Facilities",
    icon: FitnessCenter,
  },
  {
    id: 3,
    feature: "High-Speed WiFi",
    icon: Wifi,
  },
  {
    id: 4,
    feature: "Cafe & Tea Bar",
    icon: LocalCafeOutlined,
  },
  {
    id: 5,
    feature: "Affordable",
    icon: CurrencyRupeeOutlined,
  },
  {
    id: 6,
    feature: "Comfort Lounges",
    icon: LivingOutlined,
  },
  {
    id: 7,
    feature: "Quick Booking",
    icon: RestoreOutlined,
  },
  {
    id: 8,
    feature: "Sports Area",
    icon: SportsTennisOutlined,
  },
];
