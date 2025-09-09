import { useState } from "react";
import type { Gender, Inputs } from "./types";
import { Activity, ActivitiesFor } from "./constants/activityObject";
import NumberField from "./components/numberField";
import SelectField from "./components/selectField";
import ResultsCard from "./components/resultsCard";
import { useBmrTdee } from "./hooks/useBmrTdee";

export default function App() {
  const [form, setForm] = useState<Inputs>({
    age: "",
    height: "",
    weight: "",
    gender: "male",
    activity: Activity.Sedentary,
  });

  const valid =
    form.age !== "" && form.height !== "" && form.weight !== "" &&
    form.age > 0 && form.height > 0 && form.weight > 0;

  const { bmr, tdee, bmi, bmiLabel } = useBmrTdee(form, valid);

  function set<K extends keyof Inputs>(key: K, val: Inputs[K]) {
    setForm((prev) => ({ ...prev, [key]: val }));
  }

  return (
    <main className="mx-auto my-10 max-w-[720px] px-4 bg-black/80 p-3 rounded-lg">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Calorie / BMR + TDEE
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Ingrese sus datos para calcular BMR, TDEE y BMI.
        </p>
      </header>

      <section className="grid gap-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <NumberField
            label="Edad"
            value={form.age}
            onValue={(v) => set("age", v)}
            placeholder="21"
            min={1}
          />
          <NumberField
            label="Altura"
            value={form.height}
            onValue={(v) => set("height", v)}
            placeholder="175"
            min={1}
            suffix="cm"
          />
          <NumberField
            label="Peso"
            value={form.weight}
            onValue={(v) => set("weight", v)}
            placeholder="72"
            min={1}
            suffix="kg"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <SelectField<Gender>
            label="Género"
            value={form.gender}
            onValue={(v) => set("gender", v)}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />

          <SelectField<ActivitiesFor>
            label="Actividad"
            value={form.activity}
            onValue={(v) => set("activity", v)}
            options={Object.values(Activity).map((act) => ({
              label: act,
              value: act,
            })) as { label: string; value: ActivitiesFor }[]}
          />
        </div>
      </section>

      {!valid ? (
        <p className="mt-4 text-sm text-red-600">
          Completa edad, estatura y peso (todos &gt; 0).
        </p>
      ) : (
        <ResultsCard
          bmr={bmr!}
          tdee={tdee!}
          bmi={bmi!}
          bmiText={bmiLabel(bmi!)}
        />
      )}

      <footer className="mt-10 text-center text-xs text-zinc-500">
        React + TypeScript + TailwindCSS
      </footer>
    </main>
  );
}
