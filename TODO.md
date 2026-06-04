# Sayraa Groq API Key Fix - TODO Steps

## Plan Breakdown
1. ✅ [Complete] Create TODO.md tracking progress
2. ✅ [Complete] Edited app.py: Removed invalid hardcoded key, added validation/logging, error handling in send_text
3. 🔄 [Pending] User: Add valid GROQ_API_KEY to .env (get from https://console.groq.com/keys)
4. 🔄 [Pending] Restart backend: uvicorn app:socket_app --host 0.0.0.0 --port 8005 --reload
5. 🔄 [Pending] Test text/voice chat in frontend
6. ✅ [Complete] Update TODO.md with progress after each step

**✅ Code changes complete. Now:**

1. Add `GROQ_API_KEY=your_actual_key` to `.env` (sign up at https://console.groq.com/keys)
2. Run: `uvicorn app:socket_app --host 0.0.0.0 --port 8005 --reload`
3. Test chat in frontend (expect "✅ Groq client initialized" in terminal on success)
