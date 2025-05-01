import Skeleton from "react-loading-skeleton";

export default function ProfileEditLoadingPage() {
  return (
    <div className="profile-edit container max-w-container mx-auto p-6 space-y-8">
      {/* Breadcrumb */}
      <Skeleton width={120} height={16} />

      {/* Top fields */}
      <div className="grid grid-cols-3 gap-6">
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </div>

      {/* Password & Email */}
      <div className="grid grid-cols-3 gap-6">
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </div>

      {/* Banner upload area */}
      <Skeleton height={160} />

      {/* Explanation editor & image upload */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-2">
          <Skeleton width={80} height={16} />
          <Skeleton height={128} />
        </div>
        <div className="space-y-2">
          <Skeleton width={80} height={16} />
          <Skeleton height={128} />
        </div>
      </div>

      {/* Save button */}
      <div className="text-right">
        <Skeleton width={96} height={40} />
      </div>
    </div>
  );
}
