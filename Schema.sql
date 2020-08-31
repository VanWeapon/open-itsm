--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: incident; Type: TABLE; Schema: public; Owner: maint
--

CREATE TABLE public.incident (
    short_description text,
    description text,
    guid uuid DEFAULT public.uuid_generate_v4() NOT NULL
);


ALTER TABLE public.incident OWNER TO maint;

--
-- Name: incident Record ID; Type: CONSTRAINT; Schema: public; Owner: maint
--

ALTER TABLE ONLY public.incident
    ADD CONSTRAINT "Record ID" PRIMARY KEY (guid);


--
-- PostgreSQL database dump complete
--

