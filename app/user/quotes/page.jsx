/**
 * quote/page.jsx
 */

import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

const Quotes = async () => {
  const session = await getServerSession();

  try {
    const data = await prisma.user.findUnique({
      where: {
        email: session.user.email
      },
      select: {
        quotes: true
      }
    });

    if (!data || !data.quotes || data.quotes.length === 0) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No quotes found for this user.</p>
        </div>
      );
    }

    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error(error);
    // Handle the error gracefully, e.g., show an error message
    return (
      <div>
        <p>There was an error fetching the quotes.</p>
      </div>
    );
  }
};

export default Quotes;
